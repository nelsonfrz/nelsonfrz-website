import Image from "next/image";
import Tag from "./Tag";

export default function ProjectLink({ project }: { project: Project }) {
  return (<li className="w-80 h-80 bg-white hover:bg-gray-100 rounded-xl flex justify-center border-[#C5C5C5] border-[1px] transition-all duration-[250]">
    <div className="w-[280px] my-4 flex flex-col justify-around">
      <Image className="rounded-xl select-none" width="280" height="183" src={`/projects/${project.thumbnail}`} alt="Article Thumbnail" />
      <div>
        <h3 className="text-[15px] font-semibold text-black" >{project.title}</h3>
        <ul className="flex gap-1 flex-wrap my-1">
          {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </ul>
      </div>
      <div className="flex justify-between">
        <a href={project.view} target="_blank" rel="noreferrer">
          <button className="flex rounded-full bg-black opacity-75 text-white w-36 h-8 justify-between items-center px-4 select-none">
            <p className="text-[15px]">View Project</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#C2C2C2" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 2.5H17.5V7.5" stroke="#C2C2C2" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.3335 11.6667L17.5002 2.5" stroke="#C2C2C2" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </a>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <svg className="hover:cursor-pointer" width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.7107 0C7.51984 0 0 7.37522 0 16.3894C0 23.5596 4.80433 29.7057 11.4886 31.9593C12.3242 32.1641 12.5331 31.5495 12.5331 31.1399V28.2716C7.9376 29.2959 6.89317 26.223 6.89317 26.223C6.05764 24.3791 5.01323 23.7646 5.01323 23.7646C3.55103 22.7402 5.2221 22.7402 5.2221 22.7402C6.89317 22.9452 7.72871 24.3791 7.72871 24.3791C9.19091 27.0425 11.6975 26.223 12.5331 25.8132C12.7419 24.7889 13.1597 23.9695 13.5775 23.5596C9.81755 23.15 6.05764 21.7159 6.05764 15.365C6.05764 13.5212 6.6843 12.0871 7.72871 11.0628C7.51983 10.6531 6.89317 9.01415 7.9376 6.76061C7.9376 6.76061 9.39978 6.35087 12.5331 8.39954C13.7864 7.98981 15.2485 7.78495 16.7107 7.78495C18.1729 7.78495 19.6351 7.98981 20.8884 8.39954C24.0217 6.35087 25.4839 6.76061 25.4839 6.76061C26.3195 9.01415 25.9016 10.6531 25.6928 11.0628C26.7371 12.292 27.3639 13.7261 27.3639 15.365C27.3639 21.7159 23.395 22.9452 19.6351 23.3548C20.2618 24.1743 20.8884 25.1986 20.8884 26.6327V31.1399C20.8884 31.5495 21.0972 32.1641 22.1418 31.9593C28.8261 29.7057 33.6303 23.5596 33.6303 16.3894C33.4214 7.37522 25.9016 0 16.7107 0Z" fill="black" fillOpacity="0.75"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  </li>);
}