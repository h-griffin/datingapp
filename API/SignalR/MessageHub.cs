using System;
using System.Threading.Tasks;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class MessageHub : Hub
    {
        private readonly IMapper _mapper;
        private readonly IMessageRepository _messageRepository;
        public MessageHub(IMessageRepository messageRepository, IMapper mapper)
        {
            _messageRepository = messageRepository;
            _mapper = mapper;
        }

        public override async Task OnConnectedAsync(){
            var httpContext = Context.GetHttpContext();
            var otherUser = httpContext.Request.Query["user"].ToString();   // pass in from url message is sending to
            var groupName = GetGroupName(Context.User.GetUsername(), otherUser);
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            var messages = await _messageRepository.GetMessageThread(Context.User.GetUsername(), otherUser);

            await Clients.Group(groupName).SendAsync("ReceiveMessageThread", messages); // change later
        }

        public override async Task OnDisconnectedAsync(Exception exception){
            await base.OnDisconnectedAsync(exception);
        }

        private string GetGroupName(string caller, string other){
            // alphabetical for both caller and other user
            var stringCompare = string.CompareOrdinal(caller, other) < 0; // if a is less than b (alphabetical)
            return stringCompare ? $"{caller}-{other}" : $"{other}-{caller}";
        }
    }
}