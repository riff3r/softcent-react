import React, { Fragment } from "react";
import workflowImage from "../Assets/images/workflow/workflow-image.png";

const Workflow = () => {
  return (
    <Fragment>
      <section class="workflow">
        <div class="container">
          <div class="workflow-header">
            <h2 class="primary-Heading">
              <span>Workflow</span>
            </h2>
          </div>

          <div class="workflow-content">
            <div class="grid grid--2-cols">
              <div class="workflow-accordion">
                <div class="accordion-item active">
                  <div class="item-title">
                    <h3>1. Defining Goal</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="item-title">
                    <h3>2. Product Design</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="item-title">
                    <h3>3. Development</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="item-title">
                    <h3>4. Testing</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="item-title">
                    <h3>5. Product Release</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="item-title">
                    <h3>6. Maintenance Support</h3>
                  </div>

                  <div class="item-content">
                    <p>
                      Project analysis, defining project requirements and
                      objectives based on clients needs, cost and effort
                      estimation, creating value and process planning.
                    </p>
                  </div>
                </div>
              </div>

              <div class="workflow-image">
                <img src={workflowImage} alt="Workflow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="empty-space"></div>
    </Fragment>
  );
};

export default Workflow;
