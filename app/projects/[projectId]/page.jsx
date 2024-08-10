// This file should be a server component where you handle static generation

import { ProjectsData } from "../data";
import StudyCaseHeader from "./StudyCaseHeader";
import ImagePreview from "./ImagePreview";
import Features from "./Features";
import styles from "./styles.module.scss";

export async function generateStaticParams() {
  const projectIds = ProjectsData.map((project) => ({
    projectId: project.id.toString(),
  }));

  return projectIds.map(({ projectId }) => ({
    params: { projectId },
  }));
}

export default function Page({ params }) {
  const projectId = params.projectId;
  const data =
    ProjectsData.find((item) => item.id.toString() === projectId) || {};
  const features = data.features || [];

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={styles.studyCase}>
        <div className={styles.container}>
          <StudyCaseHeader
            title={data.title}
            cat={data.cat}
            tech={data.tech}
            date={data.date}
            studycase={data.studycase}
          />
        </div>
      </div>
      <ImagePreview data={data} />
      {features.length > 0 && (
        <Features features={features} defaultImg={data.img} />
      )}
    </>
  );
}
