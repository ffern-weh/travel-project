function showDetails(destination) {
    const detailsSection = document.getElementById('details');
    const title = document.getElementById('destination-title');
    const content = document.getElementById('destination-content');

    let destinationData;

    if (destination === 'japan') {
        destinationData = {
            itinerary: `
                <h3>Pre-made Itineraries</h3>
                <p>Explore our AI-generated itineraries for Japan.</p>
            `,
            food: `
                <h3>Food</h3>
                <p>Discover the best food spots in Japan.</p>
            `,
            places: `
                <h3>Places to Visit</h3>
                <p>Must-see locations in Japan.</p>
            `,
            hotels: `
                <h3>Hotels</h3>
                <p>Recommended hotels in Japan.</p>
            `,
            underrated: `
                <h3>Underrated Places</h3>
                <p>Hidden gems in Japan.</p>
            `,
            mustvisit: `
                <h3>Must-Visit Places</h3>
                <p>Iconic places you can't miss in Japan.</p>
            `
        };
        title.textContent = "Japan";
    } else if (destination === 'vietnam') {
        destinationData = {
            itinerary: `
                <h3>Pre-made Itineraries</h3>
                <p>Explore our AI-generated itineraries for Vietnam.</p>
            `,
            food: `
                <h3>Food</h3>
                <p>Discover the best food spots in Vietnam.</p>
            `,
            places: `
                <h3>Places to Visit</h3>
                <p>Must-see locations in Vietnam.</p>
            `,
            hotels: `
                <h3>Hotels</h3>
                <p>Recommended hotels in Vietnam.</p>
            `,
            underrated: `
                <h3>Underrated Places</h3>
                <p>Hidden gems in Vietnam.</p>
            `,
            mustvisit: `
                <h3>Must-Visit Places</h3>
                <p>Iconic places you can't miss in Vietnam.</p>
            `
        };
        title.textContent = "Vietnam";
    }

    content.innerHTML = destinationData.itinerary;
    detailsSection.style.display = 'block';

    window.destinationData = destinationData; // Store data globally for tab access
}

function openTab(tabName) {
    const content = document.getElementById('destination-content');
    const destinationData = window.destinationData;

    content.innerHTML = destinationData[tabName];
}
