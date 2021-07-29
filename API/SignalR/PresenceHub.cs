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

            var isOnline = await _tracker.UserConnected(Context.User.GetUsername(), Context.ConnectionId);
            if(isOnline)
            // send to everyone but the connection
                await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUsername()); // only return if user is online

            // display online users
            var currentUsers = await _tracker.GetOnlineUsers();
            await Clients.Caller.SendAsync("GetOnlineUsers", currentUsers); //who just connected
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var isOffline = await _tracker.UserDisconnected(Context.User.GetUsername(), Context.ConnectionId);
            if(isOffline)
                await Clients.Others.SendAsync("UserIsOffline", Context.User.GetUsername());
            await base.OnDisconnectedAsync(exception); // pass up to parent class

        }
    }
}