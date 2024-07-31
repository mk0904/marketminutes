function Course (props) {
     let data = props?.news;
     const finalData = data?.[3]['title'] === '6 Day Course' ? data?.[3]['description'] : 'No Updates available';

     return (
          <div className="hero">
               <h1>Course</h1>
               <div dangerouslySetInnerHTML={{ __html: finalData}} />
          </div>
     );
}

export default Course;