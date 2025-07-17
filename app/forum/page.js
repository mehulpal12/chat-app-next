import React from 'react'

const topics = [
  {
    text: "Web Development",
    img: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*O1sCklR9yHOnh9N82fqLzQ.jpeg",
    desc: "Discuss MERN stack development (MongoDB, Express.js, React, Node.js)"
  },
  {
    text: "Frontend",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230312172249/Top-10-Frontend-Technologies-To-Learn-in-2023.png",
    desc: "Explore React, Next.js, Tailwind CSS, and modern UI frameworks"
  },
  {
    text: "Backend",
    img: "https://miro.medium.com/v2/resize:fit:1200/format:webp/1*PMSpV7YP7rC4Y6vZt5MEyQ.png",
    desc: "Dive into server-side logic, APIs, databases, and authentication"
  },
  {
    text: "DevOps",
    img: "https://www.redswitches.com/wp-content/uploads/2023/08/DevOps-Roles-and-Responsibilities.webp",
    desc: "Learn CI/CD, Docker, Kubernetes, cloud hosting, and deployments"
  },
  {
    text: "UI/UX Design",
    img: "https://www.springboard.com/blog/wp-content/uploads/2022/06/ui-vs-ux-1.png",
    desc: "Understand user experience, design principles, and wireframing tools"
  },
  // {
  //   text: "Data Structures & Algorithms",
  //   img: "https://assets-global.website-files.com/625f1bd43e53f16d5b6ab1d0/643d7090cba8440b134da301_2f88b733.jpeg",
  //   desc: "Prepare for coding interviews and master core problem-solving techniques"
  // }
];

const page = () => {
  return (
    <>
    <div className='container mx-auto'>
      
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic, index)=>{
     return(
       <div key={topic.text + index} className='bg-blue-100 rounded-2xl  w-1/4 m-4 flex flex-col justify-center items-center text-center '>
        <div className="card  w-auto ">
  <figure className="px-10 ">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{topic.text}</h2>
    <p>{topic.desc}</p>
    <div className="card-actions">
      <button className="btn btn-active btn-info">Buy Now</button>
    </div>
  </div>
</div>
      </div>
     )

      })}
      </div>
      </div>
    </>
  )
}

export default page
