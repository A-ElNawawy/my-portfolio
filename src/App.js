import './App.css';

import Card         from './components/Card';
import Container    from './components/Container';
import GridWrapper  from './components/GridWrapper';

import {projectsData} from './includes/data/projectsData';

function App() {
  return (
    <div className="App">
      <main>
        <Container className="Container">
          <h1>Welcome to ElNawawy Portfolio</h1>
          <p>Here you will find each project I made.</p>
          <p>You can hover any field to read more about it.</p>
        </Container>
      </main>
      <section>
        <Container className="Container">
          <GridWrapper>
            {
              projectsData.map((project, i) => {
                return(
                  <Card
                    key={i}
                    img={project.img}
                    alt={project.alt}
                    header={project.header}
                    description={project.description}
                    mainTech={project.mainTech}
                    For={project.For}
                    originProject={project.originProject}
                    status={project.status}
                    Keywords={project.Keywords}
                    url={project.url}
                    codeUrl={project.codeUrl}
                  />
                )
              })
            }
          </GridWrapper>
        </Container>
      </section>
    </div>
  );
}

export default App;