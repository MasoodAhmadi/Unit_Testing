/*  absolute */
function absolute(number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
}

/*  isANumber */
function isANumber(str) {
  return !/\D/.test(str);
}

/* getSchoolId */
function getSchoolId(id) {
  return {
    id: id,
    label: "international high school",
  };
}

/* registerUser  */
function registerUser(username) {
  if (!username) throw new Error("Username is required");
  return { id: new Date().getTime(), username };
}

describe("full test", () => {
  it("should give positive number", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should give a false if a number and string", () => {
    const result = isANumber("112AB");
    expect(result).toBe(false);
  });

  it("should give a true if a number", () => {
    const result = isANumber("112");
    expect(result).toBe(true);
  });

  it("should give All article", () => {
    const blogsCategory = [
      { id: "All", name: "all articles" },
      {
        id: 1,
        name: "for schools",
        targetAudience: "Schools",
      },
      {
        id: 2,
        name: "for companies",
        targetAudience: "Education companies",
      },
    ];
    const result = blogsCategory.map((el) => el.name);
    expect(["all articles", "for schools", "for companies"]).toEqual(
      expect.arrayContaining(result),

      /* check for correct spelling */
      expect(result[0]).toBe("all articles"),

      /* check array content numbering and type name*/
      expect(result[1]).toBe("for schools"),

      /* check array content numbering and type name*/
      expect(result[2]).toBe("for companies")
    );
  });

  it("should give an id)", () => {
    const result = getSchoolId(1);
    expect(result).toEqual({ id: 1, label: "international high school" });
  });

  it("should retrun a user object if registerUser works", () => {
    const result = registerUser("Masood");

    /* match the registered user */
    expect(result).toMatchObject({ username: "Masood" });
  });

  it("should give word contains all in blogsCategory", () => {
    const blogsCategory = [
      { id: "All", name: "all articles" },
      {
        id: 1,
        name: "for schools",
        targetAudience: "Schools",
      },
      {
        id: 2,
        name: "for companies",
        targetAudience: "Education companies",
      },
    ];
    const result = blogsCategory.map((m) => m.name);
    expect(result[0]).toMatch("all");
  });

  it("should give all fields in fieldData", () => {
    const fieldData = [
      { id: 1, label: "all fields" },
      { id: 2, label: "educations" },
      { id: 3, label: "organizations" },
      { id: 4, label: "companies" },
    ];
    const result = fieldData.map((el) => el.label);
    expect(result).toContain("all fields");
    expect(new Set(result)).toContain("all fields");
  });

  it("should give color code and color name", () => {
    const colors = {
      defaultColor: "#e06f02",
      jacksonsBlue: "#06418D",
      sherpaBlue: "#013243",
      outerSpace: "#2e3131",
      niagara: "#239895",
      falcon: "#765d69",
      seance: "#9a12b3",
      brick: "#96281b",
      happy: "#FF4848",
      pink: "#ff2c79",
    };

    const { defaultColor, jacksonsBlue, sherpaBlue, falcon } = colors;
    const { outerSpace, pink, happy, seance, niagara, brick } = colors;

    const colorPallate = [
      { id: 1, name: "Default", hexCode: defaultColor },
      { id: 2, name: "Happy", hexCode: happy },
      { id: 3, name: "Falcon", hexCode: falcon },
      { id: 4, name: "Pinky", hexCode: pink },
      { id: 5, name: "Old Brick", hexCode: brick },
      { id: 6, name: "Niagara", hexCode: niagara },
      { id: 7, name: "Sherpa Blue", hexCode: sherpaBlue },
      { id: 8, name: "Jacksons blue", hexCode: jacksonsBlue },
      { id: 9, name: "Seance", hexCode: seance },
      { id: 10, name: "Outer Space", hexCode: outerSpace },
    ];
    const result = colorPallate.map((el) => el);
    /*     console.log("colors:", result);
     */
    expect(result[0]).toMatchObject({
      id: 1,
      name: "Default",
      /* both attempt work to define color code or parameter */
      hexCode: defaultColor,
    });
    expect(result[1]).toMatchObject({
      id: 2,
      name: "Happy",
      hexCode: "#FF4848",
    });
    expect(result[2]).toMatchObject({
      id: 3,
      name: "Falcon",
      hexCode: "#765d69",
    });
    expect(result[3]).toMatchObject({
      id: 4,
      name: "Pinky",
      hexCode: "#ff2c79",
    });
    expect(result[4]).toMatchObject({
      id: 5,
      name: "Old Brick",
      hexCode: "#96281b",
    });

    expect(result[5]).toMatchObject({
      id: 6,
      name: "Niagara",
      hexCode: "#239895",
    });

    expect(result[6]).toMatchObject({
      id: 7,
      name: "Sherpa Blue",
      hexCode: "#013243",
    });

    expect(result[7]).toMatchObject({
      id: 8,
      name: "Jacksons blue",
      hexCode: "#06418D",
    });

    expect(result[8]).toMatchObject({
      id: 9,
      name: "Seance",
      hexCode: "#9a12b3",
    });

    expect(result[9]).toMatchObject({
      id: 10,
      name: "Outer Space",
      hexCode: "#2e3131",
    });

    /* since not match so it is true and passes */
    expect(result[0]).not.toMatchObject({
      id: 11,
      name: "Odduter Spaddce",
      hexCode: "#2eddd3131",
    });
  });

  /*  */
  it("should give route page information", () => {
    const routes = {
      home: "/",
      blogs: "/blog",
      schoolSearch: "/school-search",
      companySearch: "/company-search",
      organizationSearch: "/organization-search",
    };

    const { blogs, home, companySearch, schoolSearch, organizationSearch } =
      routes;

    const BreadCrump = [
      { id: 1, label: "Home", path: home },
      { id: 5, label: "Blogs", path: blogs },
      { id: 3, label: "School Search", path: schoolSearch },
      { id: 2, label: "Company Search", path: companySearch },
      { id: 4, label: "Organization Search", path: organizationSearch },
    ];

    const result = BreadCrump.map((el) => el.label);
    expect(result).toContain("Home");
    expect(result).toContain("Blogs");
    expect(result).toContain("School Search");
    expect(result).toContain("Company Search");
    expect(result).toContain("Organization Search");
    /* not mean whatever isn't in arrayList will be true.*/
    expect(result).not.toContain("Organiddddddddzation Search");
  });
});
