function updateMain(destination) {
    content = document.getElementById('main');
    if (destination === 'about') {
        content.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_r0qyGJJ6HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Hi there, my name is Dan (<a href="https://github.com/liljestig">Liljestig</a> on GitHub).</p>
            <p>I was born and raised in Stockholm, Sweden, but since 2011, living in Singapore.</p>
            <p>One of my great passions in life has always been coding, doing software development through high school.</p>
            <p>I started working with supporting AS/400 mainframes and LPAR, or logical partitioning.</p>
            <p>Since the emerge of x86 virtualization however, I have spent most of my career migrating datacenters, moving physical machines into virtual machines.</p>
            <p>In later years this has evolved into building and managing clouds — elastic virtual datacenters, that uses infrastructure as code (Bash, JavaScript, JSON, PowerShell, Python, REST, and YAML scripting) to deploy and manage workloads.</p>
            <p>Besides computers, I’m also a car guy, although not so much of a petrol-head anymore, since going electric earlier this year.</p>
            <p>A fun fact about me is that I love cooking and baking in my spare time.</p>
            <p>Send me an <a href="sendto:dan@liljestig.com">email</a>, or contact me on <a href="https://sg.linkedin.com/in/danliljestig">LinkedIn</a>, .</p>
        `;
    }    
    else if (destination === 'projects') {
        content.innerHTML = `
            <p>Here are some fun projects I've been working on recently:</p>
            <ul>
                <li>
                    <a href="https://github.com/liljestig/pacmen">PacMen Exercise</a>
                    <p><a href="pacmen.jpg" alt="PacMen Exercise"><img src="pacmen.jpg" width="20%" height="20%"></a></p>
                </li>
                <li>
                    <a href="https://github.com/liljestig/eyes">Eye Exercise</a>
                    <p><a href="eyes.jpg" alt="Eye Exercise"><img src="eyes.jpg" width="20%" height="20%"></a></p>
                </li>
                <li>
                    <a href="https://github.com/liljestig/map-animation">Real Time Bus Tracker</a>
                    <p><a href="map-animation.jpg" alt="Real Time Bus Tracker"><img src="map-animation.jpg" width="20%" height="20%"></a></p>
                </li>
                <li>
                    <a href="https://github.com/liljestig/formik-form">Formik Form</a>
                    <p><a href="formik-form.jpg" alt="Real Time Bus Tracker"><img src="formik-form.jpg" width="20%" height="20%"></a></p>
                </li>
            </ul>
        `;
    }
}
