const AboutSection = () => {
  const datas = [
    {
      title: "BIRTHDAY",
      name: "1990 OCTOBER,2",
    },
    {
      title: "SKYPE",
      name: "yourskypeid",
    },
    {
      title: "MARITAL",
      name: "SINGLE",
    },
    {
      title: "PHONE",
      name: "123-456-789",
    },
    {
      title: "NATIONALITY",
      name: "AMERICAN",
    },
    {
      title: "EMAIL",
      name: "me@domain.com",
    },
  ];

  return (
    <div className="border h-[440px] px-[21%] pt-[80px] flex items-center gap-[61px]">
      <div className="w-[564px] h-[191px] rounded-[7px] p-[36px] shadow-md border">
        <h2 className="text-[21px] font-bold">Personal Details</h2>
        <div className="mt-[21px] grid grid-cols-2 gap-y-1">
          {datas.map((data, i) => (
            <p key={i} className="text-[15px] font-[500] flex gap-2">
              {data.title}: <span className="text-[#403F3D]">{data.name}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="w-[500px]">
        <h2 className="text-[25px] font-[900] ">About Me</h2>
        <p className="text-[17px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
