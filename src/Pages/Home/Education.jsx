

const Education = () => {
    return (
        <div>
            <h3 className='text-2xl md:text-5xl font-bold text-yellow-400 text-center md:py-5 py-1 '>Educational Qualification</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           Sl No.
          </label>
        </th>
        <th className="text-center">Degree Name</th>
        <th className="text-center">Institutions</th>
        <th className="text-center">Results</th>
        <th className="text-center">Passing year</th>
    
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
          1.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold">M.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-sm opacity-80">2022 -2023</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold">Daffodil International University (DIU)</div>
              <div className="text-sm opacity-80">Ashulia, Dhaka</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold">CGPA: 3.74 / 4.00</td>
        <td className="text-center font-bold">
          2023
        </td>
      </tr>
      <tr>
        <th>
          <label>
          2.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold">B.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-sm opacity-80">2016 -2020</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold">Bangladesh University of Business and Technology (BUBT)</div>
              <div className="text-sm opacity-80">Mirpur, Dhaka</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold">CGPA: 3.95 / 4.00</td>
        <td className="text-center font-bold">
          2020
        </td>
      </tr>
      <tr>
        <th>
          <label>
          1.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold">M.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-sm opacity-80">2022 -2023</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold">Daffodil International University (DIU)</div>
              <div className="text-sm opacity-80">Ashulia, Dhaka</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold">CGPA: 3.74 / 4.00</td>
        <td className="text-center font-bold">
          2023
        </td>
      </tr>
      <tr>
        <th>
          <label>
          1.
          </label>
        </th>
        <td>
            <div className="text-center">
              <div className="font-bold">M.Sc in Computer Science & Engineering (CSE)</div>
              <div className="text-sm opacity-80">2022 -2023</div>
            </div>
        </td>
        <td>
            <div className="text-center">
            <div className="font-bold">Daffodil International University (DIU)</div>
              <div className="text-sm opacity-80">Ashulia, Dhaka</div>
            </div>
        
        </td>
          
        <td className="text-center font-bold">CGPA: 3.74 / 4.00</td>
        <td className="text-center font-bold">
          2023
        </td>
      </tr>
      
    </tbody>
    

    
  </table>
</div>
        </div>
    );
};

export default Education;