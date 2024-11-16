import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  });
  it("a list a people is displayed", () => {
    // to implement
  });
  it("a footer is displayed", () => {
    // to implement
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});

describe("When the page is rendered", () => {
  it("all anchor links have valid corresponding IDs", () => {
    render(<Home />);

    // Sélectionne tous les liens avec des ancres dans la page
    const anchorLinks = screen.getAllByRole("link", {
      name: /nos services|nos réalisations|notre équipe|contact/i,
    });

    anchorLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const anchorId = href.slice(1); // Extraire l'ID après le #
        const targetElement = document.getElementById(anchorId);

        // Vérifie si l'élément avec cet ID existe
        expect(targetElement).toBeTruthy();
      }
    });
  });
});
