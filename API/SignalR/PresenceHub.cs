using System;
using System.Threading.Tasks;
using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    [Authorize]
    public class PresenceHub : Hub
    {
        private readonly PresenceTracker _tracker;
        public PresenceHub(PresenceTracker tracker)
        {
            _tracker = tracker;
        }

        public override async Task OnConnectedAsync()
        {

            await _tracker.UserConnected(Context.User.GetUsername(), Context.ConnectionId);

            // send to everyone but the connection
            await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUsername());

            // display online users
            var currentUsers = await _tracker.GetOnlineUsers();
            await Clients.All.SendAsync("GetOnlineUsers", currentUsers);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await _tracker.UserDisconnected(Context.User.GetUsername(), Context.ConnectionId);

            await Clients.Others.SendAsync("UserIsOffline", Context.User.GetUsername());
            await base.OnDisconnectedAsync(exception); // pass up to parent class

            // display online users
            var currentUsers = await _tracker.GetOnlineUsers();
            await Clients.All.SendAsync("GetOnlineUsers", currentUsers);
        }
    }
}