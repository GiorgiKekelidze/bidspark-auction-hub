
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class AuctionHub : Hub
{
    // User joins an auction to receive real-time events for it
    public async Task JoinAuction(int auctionId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, $"auction-{auctionId}");
    }

    // Client sends a new bid
    public async Task PlaceBid(BidDto bid)
    {
        // [TODO: Validate bid, save to DB, update item price...]
        // Simplified: echo bid to everyone in the same auction group
        await Clients.Group($"auction-{bid.ItemId}").SendAsync("ReceiveBid", new {
            user = Context.User.Identity.Name ?? "Guest",
            amount = bid.Amount,
            time = System.DateTime.UtcNow.ToString("o")
        });
    }
}

public class BidDto
{
    public int ItemId { get; set; }
    public decimal Amount { get; set; }
}
