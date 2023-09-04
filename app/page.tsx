import Image from 'next/image'

const skills = ['Typescript', 'React JS', 'Next JS', 'Node JS', 'Express Js', 'TypeORM', 'Python', 'Rest APIS', 'C/C++', 'Microservices', 'Django', 'Flask', 'Docker', 'Nginx', 'Kubernetes']

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-1 p-24 max-w-[74vw] mx-auto">

      <div className='flex gap-5'>
        <p className='flex flex-col text-[40px]'>
          <span>Hello, &#128075;</span>
          <span className='text-amber-500'>This is Abdul bari&nbsp;</span>
          <span>Software Engineer</span>
        </p>

        <Image src={"/profile-pic.png"} alt='this is me' className='ml-8' width={200} height={200} />
      </div>

      <div className='w-full mt-[8rem]'>
        <h2 className='text-stone-400 text-center text-[18px] w-full pb-5 hover:underline-offset-4 hover:transition-all hover:ease-in-out hover:underline cursor-pointer'>
        Skills I Work With</h2>
        <div className='flex flex-col flex-wrap gap-3 h-[15rem] w-[100%] mt-5 items-center'>
          {skills.map(skill => <p key={skill.toLocaleLowerCase()} className='mb-2 px-2 text-[18px] cursor-pointer font-normal text-white'>{skill}</p>)}
        </div>
      </div>

    </main>
  )
}
