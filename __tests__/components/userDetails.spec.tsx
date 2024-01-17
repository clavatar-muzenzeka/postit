import UserDetailsComponent from "@/components/userDetailsComponent";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummyUser = {
  id: "1",
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

describe("User details component", () => {
  it("Renders the user component", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const mainElement = screen.getByTestId("user-details-component");

    expect(mainElement).toBeInTheDocument();
  });

  it("Make sur that the user name is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userName = screen.getByTestId("user-name");

    expect(userName).toBeInTheDocument();
  });

  it("Make sur that the user name is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userName = screen.getByTestId("user-name");

    expect(userName).toHaveTextContent(dummyUser.name);
  });

  it("Make sur that the user pseudo is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userPseudo = screen.getByTestId("user-pseudo");

    expect(userPseudo).toBeInTheDocument();
  });

  it("Make sur that the user pseudo is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userPseudo = screen.getByTestId("user-pseudo");

    expect(userPseudo).toHaveTextContent("@"+dummyUser.username);
  });

  it("Make sur that the user contacts is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userEmail = screen.getByTestId("user-contacts");

    expect(userEmail).toBeInTheDocument();
  });

  it("Make sur that the user contacts is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userEmail = screen.getByTestId("user-contacts");

    expect(userEmail).toHaveTextContent(dummyUser.phone+" - "+dummyUser.email);
  });

  

  it("Make sur that the user website is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userWebsite = screen.getByTestId("user-website");

    expect(userWebsite).toBeInTheDocument();
  });

  it("Make sur that the user website is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userWebsite = screen.getByTestId("user-website");

    expect(userWebsite).toHaveTextContent(dummyUser.website);
  });

  it("Make sur that the user company name is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyName = screen.getByTestId("user-company-name");

    expect(userCompanyName).toBeInTheDocument();
  });

  it("Make sur that the user company name is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyName = screen.getByTestId("user-company-name");

    expect(userCompanyName).toHaveTextContent(dummyUser.company.name);
  });

  it("Make sur that the user company catch phrase is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyCatchPhrase = screen.getByTestId(
      "user-company-catch-phrase"
    );

    expect(userCompanyCatchPhrase).toBeInTheDocument();
  });


  it("Make sur that the user company catch phrase is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyCatchPhrase = screen.getByTestId(
      "user-company-catch-phrase"
    );

    expect(userCompanyCatchPhrase).toHaveTextContent(
      dummyUser.company.catchPhrase
    );
  });

  it("Make sur that the user company bs is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyBs = screen.getByTestId("user-company-bs");

    expect(userCompanyBs).toBeInTheDocument();
  });

  it("Make sur that the user company bs is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userCompanyBs = screen.getByTestId("user-company-bs");

    expect(userCompanyBs).toHaveTextContent(dummyUser.company.bs);
  });

  it("Make sur that the user address street is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressStreet = screen.getByTestId("user-address-street");

    expect(userAddressStreet).toBeInTheDocument();
  });

  it("Make sur that the user address street is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressStreet = screen.getByTestId("user-address-street");

    expect(userAddressStreet).toHaveTextContent(dummyUser.address.street);
  });

  it("Make sur that the user address suite is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressSuite = screen.getByTestId("user-address-suite");

    expect(userAddressSuite).toBeInTheDocument();
  });

  it("Make sur that the user address suite is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressSuite = screen.getByTestId("user-address-suite");

    expect(userAddressSuite).toHaveTextContent(dummyUser.address.suite);
  });

  it("Make sur that the user address city is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressCity = screen.getByTestId("user-address-city");

    expect(userAddressCity).toBeInTheDocument();
  });

  it("Make sur that the user address city is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressCity = screen.getByTestId("user-address-city");

    expect(userAddressCity).toHaveTextContent(dummyUser.address.city);
  });

  it("Make sur that the user address zipcode is rendreded correcty", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressZipcode = screen.getByTestId("user-address-zipcode");

    expect(userAddressZipcode).toBeInTheDocument();
  });

  it("Make sur that the user address zipcode is rendreded with the proper text", () => {
    render(<UserDetailsComponent user={dummyUser} />);

    const userAddressZipcode = screen.getByTestId("user-address-zipcode");

    expect(userAddressZipcode).toHaveTextContent(dummyUser.address.zipcode);
  });
  
});
