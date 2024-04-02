

const Education = () => {
    return (
        <div className=' bg-gradient-to-r from-[#0f0215] to-[#661e80]'>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-5 py-1 '>Educational Qualification</h3>
            <div className="overflow-x-auto bg-violet-400">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-center font-extrabold text-black text-xs md:text-base">
          <label>
           Sl No.
          </label>
        </th>
        <th className="text-center font-extrabold text-black text-sm md:text-base">Degree Name</th>
        <th className="text-center font-extrabold text-black text-sm md:text-base">Institutions</th>
        <th className="text-center font-extrabold text-black text-sm md:text-base">Results</th>
        <th className="text-center font-extrabold text-black text-sm md:text-base">Passing year</th>
    
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className="text-center text-xs md:text-base">
          <label>
          1.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold text-xs md:text-base">M.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">2022 -2023</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold text-xs md:text-base">Daffodil International University (DIU)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Ashulia, Dhaka, Bangladesh</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold text-xs md:text-base">CGPA: 3.74 / 4.00</td>
        <td className="text-center font-bold text-xs md:text-base">
          2023
        </td>
      </tr>
      <tr>
        <th className="text-center text-xs md:text-base">
          <label>
          2.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold text-xs md:text-base">B.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">2016 -2020</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold text-xs md:text-base">Bangladesh University of Business and Technology (BUBT)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Mirpur, Dhaka, Bangladesh</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold text-xs md:text-base">CGPA: 3.95 / 4.00</td>
        <td className="text-center font-bold text-xs md:text-base">
          2020
        </td>
      </tr>
      <tr>
        <th className="text-center text-xs md:text-base">
          <label>
          3.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold text-xs md:text-base">Higher Secondary Certificate (HSC)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Science</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold text-xs md:text-base">Chittagong Collegiate School</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Chittagong, Bangladesh</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold text-xs md:text-base">GPA: 5.00 / 5.00</td>
        <td className="text-center font-bold text-xs md:text-base">
          2015
        </td>
      </tr>
      <tr>
        <th className="text-center text-xs md:text-base">
          <label>
          4.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold text-xs md:text-base">Secondary School Certificate (SSC)</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Science</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold text-xs md:text-base">Nasirabad Govt. High School</div>
              <div className="text-xs md:text-sm opacity-90 font-medium">Chittagong, Bangladesh</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold text-xs md:text-base">GPA: 5.00 / 5.00</td>
        <td className="text-center font-bold text-xs md:text-base">
          2013
        </td>
      </tr>
      
    </tbody>
    

    
  </table>
</div>
        </div>
    );
};

export default Education;