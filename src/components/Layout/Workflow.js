import React, { Fragment } from "react";
import workflowImage from "../Assets/images/workflow/workflow-image.png";

const Workflow = () => {
  return (
    <Fragment>
      <section className="workflow">
        <div className="container">
          <div className="workflow-header">
            <h2 className="primary-Heading">
              <span>Workflow</span>
            </h2>
          </div>

          <div className="workflow-content">
            <div className="grid grid--2-cols">
              <div className="workflow-accordion">
                <div className="accordion-item active">
                  <div className="item-title">
                    <h3>1. Defining Goal</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="item-title">
                    <h3>2. Product Design</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="item-title">
                    <h3>3. Development</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="item-title">
                    <h3>4. Testing</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="item-title">
                    <h3>5. Product Release</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div className="accordion-item">
                  <div className="item-title">
                    <h3>6. Maintenance Support</h3>
                  </div>

                  <div className="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="workflow-image">
                <img src={workflowImage} alt="Workflow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="empty-space"></div>
    </Fragment>
  );
};

export default Workflow;
