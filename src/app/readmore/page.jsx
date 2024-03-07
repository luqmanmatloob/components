'use client'
import ReadMore from '../../Components/ReadMore';

export default function Home() {
  const longText = `
  Welcome to my corner of the web! I am Luqman Matloob, a dedicated software developer with a passion for crafting immersive digital experiences. With a blend of creativity and technical expertise, I transform ideas into stunning, user-friendly interfaces that captivate and delight.
  Over the past two years, I've honed my skills in HTML, CSS, and JavaScript, building a strong foundation in web development. Specializing in frameworks like React and Next.js, I thrive on creating dynamic and interactive applications that push the boundaries of user engagement.
  
  Furthermore, I'm proficient in utilizing powerful tools like Tailwind CSS and Bootstrap to streamline development and ensure sleek, responsive designs. My backend expertise includes working with databases such as MongoDB and SQL Server, enabling robust data management and integration.
  
  Before transitioning to web development, I honed my skills in automating tasks within Excel using VBA, streamlining processes, and performing data cleaning and analysis. Additionally, I specialized in automating and cleaning data within Google Sheets and Google Apps Script to enhance efficiency and productivity.
  
  But for me it's not just about code for me – it's about creating connections. I believe in the power of effective communication and collaboration, working closely with clients to understand their vision and bring it to life. Whether it's building a sleek social media platform or refining existing processes with automation, I'm driven by a commitment to excellence and innovation.
  
  When I'm not coding, you'll find me exploring the depths of history or pondering the mysteries of philosophy. I believe in the importance of lifelong learning and continuous growth, both personally and professionally.
  
  Ready to embark on a journey of digital transformation? Let's connect, collaborate, and code something incredible together.
  
   I’m currently working on building my own Social Meida webapp
    
    `;

  return (
    <div className='flex justify-center items-center min-w-[100vw]  min-h-[100vh]'>
      <div className='max-w-[50vw]'>
      <ReadMore text={longText} maxLength={500} /></div>
    </div>
  );

}
