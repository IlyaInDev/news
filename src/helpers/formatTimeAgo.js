export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondsPass = (now.getTime() - date.getTime()) / 1000;

    if (secondsPass < 60) {
        return `${Math.floor(secondsPass)}s ago`;
    } 
    
    if (secondsPass < 3600) {
        return `${Math.floor(secondsPass / 60)}m ago`;
    }

    if (secondsPass <= 86400) {
        return `${Math.floor(secondsPass / 3600)}h ago`;
    }

    if (secondsPass > 86400) {
        const day = Math.floor(secondsPass / 86400);
        return day === 1 ? `${day} day ago` : `${day} days ago`;
    }
}