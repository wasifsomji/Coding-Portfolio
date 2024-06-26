import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "May 2024 - Present",
      title: "The MRG Group | Software Engineering Intern",
      description: [
        "Incoming @ Summer '24"
      ]
    },
    {
      date: "May 2024 - Present",
      title: "Lottus | Backend Engineering Intern",
      description: [
        "Part-time startup work in progress. Working on currency conversion for a blockchain-based transfer system.",
      ]
    },
    {
      date: "Feb 2023 - Present",
      title: "Khamis Towing and Roadside Assistance | Software Engineer",
      description: [
        "Designed and implemented a full-stack web application designed to manage 300+ customers per month, reducing task downtime by 90%." ,
        "Utilized React.js for the UI, Express.js and Node.js for back-end server operations, and integrated a MongoDB database for effective data storage solutions, ensuring organized data management.",
        "Developed a thorough testing suite of 75+ unit and integration tests using Jest and Supertest."
      ]
    },

    {
      date: "Jun 2023 - Aug 2023",
      title: "Pacific Reach | IT Analyst Intern",
      description: [
        "Efficiently resolved a backlog of <b>500+</b> Helpdesk tickets, leveraging <b>Azure Active Directory</b> and implementing technology upgrades at over <b>20</b> national sites, enhancing system efficiency and user experience.",
        "Developed and executed a detailed plan to deploy two-factor authentication (2FA) for the Pacific Reach organization using Azure’s robust security services, fortifying the security framework for 200+ users. ",
        "Mastered practical skills in motherboard logic and hardware troubleshooting, excelling in component replacement and significantly cutting costs in technology upgrades and replacements by 28%."
      ],
      expanded: false
    }
    
    
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
