import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6">
        Education
      </h1>

      <div className="w-full max-w-4xl flex flex-col gap-6 px-6">
        {EDUCATION.map((edu) => (
          <div
            key={edu.institution}
            className="p-6 bg-[#0b0b1a] rounded-lg border border-[#3b2b6f33] shadow-md"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-xl font-bold text-white">{edu.institution}</h2>
                <p className="text-sm text-gray-300">{edu.location}</p>
                <p className="mt-2 text-purple-300 font-medium">{edu.degree}</p>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-sm text-gray-400">
                  {edu.startYear} - {edu.endYear}
                </p>
                {"National_Exit_exam" in edu && edu.National_Exit_exam && (
                  <p className="text-sm text-gray-300">National Exit exam: {edu.National_Exit_exam}</p>
                )}
                {"Relevant_Courses" in edu && edu.Relevant_Courses && (
                  <p className="text-sm text-gray-300">Relevant Courses: {edu.Relevant_Courses}</p>
                )}
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
};
