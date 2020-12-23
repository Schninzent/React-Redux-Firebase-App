import React from 'react'
import ProjectSummary from './ProjectSummary'


//------------------>nimmt das projects property direkt aus den props welche übergeben werden
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      //nur wenn projects Inhalt hat, dann führe .map aus 
      { projects && projects.map(project => {
        return (
          //project und id prop an Summary übergeben und anzeigen
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList
