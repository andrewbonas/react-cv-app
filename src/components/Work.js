import React from "react";
import uniqid from "uniqid";
import "../styles/Work.css";

const Work = (props) => {
  const { work, onDelete, preview } = props;

  return (
    <div>
      <h2 className="capitals">work</h2>
      <ul>
        {work.map((job) => {
          return (
            <div key={uniqid()}>
              <div className="work">
                <div className="work-left">
                  <h3>{job.name}</h3>
                  <h4>{job.position}</h4>
                  <div className="capital work-description">
                    • {job.description}
                  </div>
                </div>
                <ul className="no-bullet capital text-right">
                  <li>{job.location}</li>
                  <li>
                    {job.start} - {job.finish}
                  </li>
                </ul>
              </div>
              {preview && (
                <div className="remove-button-ctn delete-work">
                  <button
                    onClick={() => {
                      onDelete();
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Work;
