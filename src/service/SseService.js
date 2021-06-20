
export default {
    eventSource: null,
    initConnection: function () {
        const eventSource = new EventSource('/api/sse/subscribe');

        eventSource.addEventListener('notification', event => {
            const data = JSON.parse(event.data);

            //   const sender = new Member(data.sender.id, data.sender.fullName);
            //   const notification = new Notification(data.id, data.message, data.detailsLink, sender);

            alert(`You have a new notification!`);
        });

        eventSource.onerror = e => eventSource.close();
        this.eventSource = eventSource;
        console.log(eventSource)
    },
    closeConnection: function () {
        this.eventSource.close();
    }
}

