import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--highSchool"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className="vertical-timeline-element-title">
            Sunbeam School Lahartara, Varanasi, U.P.
          </h4>
          <p>High School - 9.2 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--seniorSecondary"
          date="2018-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className="vertical-timeline-element-title">
            Sunbeam School Lahartara, Varanasi, U.P.
          </h4>
          <p>Senior Secondary School - 92%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--university"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h4 className="vertical-timeline-element-title">
            Indian Institute of Information Technology, Sonepat, Haryana
          </h4>
          <p>Computer Science & Engineering - 8.63 GPA (Current)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--achievment"
          date="2023"
          iconStyle={{ background: "gold", color: "#fff" }}
          icon={<EmojiEventsIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Qualified GATE 2023
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
