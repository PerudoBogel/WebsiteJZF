document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    if (timelineContainer && typeof timelineEvents !== 'undefined') {
        const timeline = document.createElement('div');
        timeline.className = 'timeline';

        // Create axis line
        const axis = document.createElement('div');
        axis.className = 'timeline-axis';
        timeline.appendChild(axis);

        function addEventMarker(event) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';

            const marker = document.createElement('div');
            marker.className = 'timeline-marker';

            const text = document.createElement('div');
            text.className = 'timeline-event-text';
            text.innerHTML = `${event.description}`;

            eventDiv.appendChild(marker);
            eventDiv.appendChild(text);
            timeline.appendChild(eventDiv);
        }
        
        function addMilestoneMarker(year,position) {
            const milestoneDiv = document.createElement('div');
            milestoneDiv.className = 'timeline-milestone';
            milestoneDiv.style.left = `${position}px`;

            const marker = document.createElement('div');
            marker.className = 'timeline-milestone-marker';

            const text = document.createElement('div');
            text.className = 'timeline-milestone-text';
            text.textContent = year;

            milestoneDiv.appendChild(text);
            milestoneDiv.appendChild(marker);
            timeline.appendChild(milestoneDiv);
        }

        // Add milestones positioned based on their actual timestamps
        eventCount = timelineEvents.length;
        eventWidth = 250;
        timelinePadding = 250;
        lastYear = null;
        for ( event_i = 0; event_i < eventCount; event_i++) {
            
            let event = timelineEvents.at(event_i);
            let eventYear = event.year;
            addEventMarker(event);

            // add milestone if year changed
            if (lastYear != eventYear) {
                addMilestoneMarker(eventYear, (event_i * eventWidth) / eventCount * 10 + timelinePadding);
            }
            lastYear = eventYear;
        };

        timelineContainer.appendChild(timeline);
    } else {
        console.error("Timeline container not found or timelineEvents data missing.");
    }
});
