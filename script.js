 // Fetch GitHub projects
 const username = 'ammarspaces';
 fetch(`https://api.github.com/users/${username}/repos`)
     .then(response => response.json())
     .then(data => {
         const projectsContainer = document.getElementById('projects');
         data.forEach(project => {
             const projectElement = document.createElement('div');
             projectElement.classList.add('project');
             projectElement.innerHTML = `
                 <h3>${project.name}</h3>
                 <p>${project.description ? project.description : 'No description available'}</p>
                 <a href="${project.html_url}" target="_blank">View on GitHub</a>
             `;
             projectsContainer.appendChild(projectElement);
         });
     })
     .catch(error => console.error('Error fetching GitHub projects:', error));