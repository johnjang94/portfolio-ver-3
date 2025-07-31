const websiteContent = {
  faq: [
    {
      question: "Can you help with custom projects?",
      answer: (
        <>
          I am happy to help you with custom projects. I may need more
          information, so please reach out to me via the{" "}
          <a
            href="/contact"
            target="_blank"
            className="text-blue-500 underline"
            rel="noopener noreferrer"
          >
            contact page
          </a>
          .
        </>
      ),
      route: ["/home", "/ho-me"],
    },
    {
      question: "What is the project that you are most confident with?",
      answer: "I am happy to talk about 'The Sakhi' and 'Operate-Ease'.",
      route: ["/home", "/ho-me"],
    },
    {
      question:
        "You've emphasized both elegant design and data-driven strategies throughout your work. Can you describe an experience where you had to reconcile these two elements, and how did that challenge shape your design approach?",
      answer:
        "I think that it depends on the project. If the project respects more graphic-oriented values, I may need to focus slightly more on how the UI could appear to be elegant. If the project respects improving a certain KPI, I think that the data-drive strategy needs to be more respected.",
      route: ["/home", "/ho-me"],
    },
    {
      question:
        "Your journey spans neuroscience, teaching, and design. How have these varied experiences influenced your design philosophy, particularly in understanding how users interact with and make decisions based on visuals?",
      answer:
        "This is the reason that I am interested in learning the user behavior based on the heat maps or where the users have clicked through because I get to know what led their decisions or how their decisions were shaped based on the visuals. In my past experience, I have always seen that the users prefer simple and easy tasks. I am here to promote what they enjoy doing.",
      route: ["/home", "/ho-me"],
    },
    {
      question:
        "You ventured into web development to better express your creative ideas. How has integrating coding with your design work influenced the way you approach projects, and what key insights have you gained from this cross-disciplinary experience?",
      answer:
        "If I did not learn anything about how computer actually brings digital world into the reality, I do not think that I have been able to design products that are practical. Delving into Web development actually helped me understand how digital world impacts our lives every day.",
      route: ["/home", "/ho-me"],
    },
  ],
  sakhi: [
    {
      question: "What kind of questions can I ask about this project?",
      answer:
        "You may learn what The Sakhi is as a brand, how I performed in this project, how I tried to blend Indian cultural values in North American society, etc.",
    },
    {
      question: "What is The Sakhi?",
      answer:
        "Sakhi is an Indian luxury clothing e-commerce project focused on high-quality fabrics and exclusive designs.",
    },
    {
      question:
        "You set a goal of a 20% conversion lift. How did you determine that target, and what benchmarks or historical data supported this decision?",
      answer:
        "During the research process, my team and I compared the Indian products to the Western brands. From this comparison, we found out that Indian products have a room to grow in the market, especially within the regions where a lot of Indians live, too.",
    },
    {
      question:
        "In your case study, you mention using usability testing insights to drive the menu overhaul. What was the most surprising insight you uncovered, and how did it specifically inform your design changes?",
      answer:
        "I was not particularly surprised with any particular insight, but I was glad to find out that many participants were confused with the label names in the navigation or how the names were classified before the changes.",
    },
    {
      question:
        "The beta site suffered from an over-complex menu structure that confused non-Indian users. What specific design elements did you introduce to reduce cognitive load and improve navigation for this audience?",
      answer:
        "Since the participants were confused with the way the menus were organized or displayed in the navigation layer, I used card-sorting method to see how The Sakhi should re-organize the menu names that properly represent the products that they sell. In terms of the colors, the owner has provided the color guideline, so I simply followed the guideline.",
    },
    {
      question:
        "You aimed to simplify the user experience while still conveying The Sakhi's premium identity and rich cultural narrative. How did you strike that balance, and which design decisions were most critical in achieving this?",
      answer:
        "I conducted research on how society perceives luxury or richness based on different combination of colors. Fortunately, some of those colors included the colors that the owner of The Sakhi has chosen. After a few sketches, I have decided to create a menu button called 'Premium' to distinguish some products from the ordinary.",
    },
    {
      question:
        "With a team comprising UX designers, researchers, a product strategist, and a project manager, how did you coordinate effectively to ensure that the data-driven approach was maintained throughout the project?",
      answer:
        "In the beginning, the role of UX Research was quite significant because I needed data to understand where the bounce-off rate was the highest and what caused the users to bounce-off so much. This data came from the UX Research team. Once I received the data from the UX Research team, I had frequent meetings with the Product Strategists to focus on designing the MVP. Once I was done with MVP, I handed it over to the UX Research team to get it tested again.",
    },
    {
      question:
        "As a non-Indian, you gained significant cultural insights during this project. How did this learning process influence your design decisions, and in retrospect, would you adjust any aspect of the project to better integrate cultural nuances?",
      answer:
        "One big lesson I learned from this project is that, you cannot learn everything from metrics. It all depends on what kind of question you ask and how you ask your questions, but I came to understand that experience does not always get enough representation from questions. I understand that Indian culture is widely spread around the world, but it is also the fact that the general public may not be aware of Indian culture deep in-depth. I think that it is important to help the shoppers with lots of explanations for each product, considering that they are still quite newbies to the new culture.",
    },
  ],
  operate: [
    {
      question:
        "Could you explain the background and decision-making process behind positioning Operate-Ease as a B2B SaaS platform tailored specifically for small-scale operators, rather than focusing on large hotels?",
      answer:
        "Based on my research, many existing brands were all focused on large hotels. Large hotels are not the only business people who can provide accommodation to the travelers. I decided to see what kind of issues that the small-medium hoteliers were facing.",
    },
    {
      question:
        "What drove the decision to adopt a tiered subscription model (Basic, Pro, Enterprise), and how does each tier address the unique needs of small-scale operators?",
      answer:
        "Based on what I understood from the founder's intention, he wanted to charge higher membership fees depending on the needs of the essential services. It is that if the hoteliers are relying more on our services that range from scheduling rooms, payment, clean-up, etc., the model asks for more money from the hotelier.",
    },
    {
      question:
        "In the initial MVP phase, what was the rationale behind selecting core features such as reservation, hygiene, and payment management? What user feedback or research insights influenced this decision?",
      answer:
        "Those three tasks were chosen because we had the user-centric perspective. Everything begins from booking a room and we wanted to know what specific activities were related to the action of booking a room, so we have decided to start from reservation, hygiene, and payment process.",
    },
    {
      question:
        "Among the insights gathered from your one-on-one interviews, which one had the most significant impact on the platform's design and functional improvements, and how was it incorporated?",
      answer:
        "Among the interviewees, I had seen a few actual hoteliers who left comments on how similar the complexity looked like from my work in comparison to the established brands. I have decided to pivot the idea of all-in-one but brought two specialized dashboards that focuses on specific tasks. ",
    },
    {
      question:
        "How did you leverage tools like Figma, Figjam, Zeplin, etc., to ensure smooth communication and feedback between UX researchers, product designers, and web developers?",
      answer:
        "Figma was used to communicate with UX Researchers and other designers. Since Figma is a really good tool for design, it helps communication between the research team and the design team in sharing the ideas. Figma is not the best tool for CSS, interaction, etc. I use Zeplin or Webflow to communicate with the developers on how this design should come out on the internet.",
    },
  ],
  "food-distro": [
    {
      question:
        "Can you walk me through your design process for enhancing the search functionality in Food Distro? What specific contributions did you make as an Associate UX Designer?",
      answer:
        "I coordinated with UX Research team and discovered a few different factors that act as road-blockers for locals to donate each other. I tried to think how locals can donate easier considering the conditions of distance, time-arrangements, freshness of the food, etc. I allowed the users to be able to search for particular grocery item and be able to match up with the locals who are willing to donate the item to them.",
    },
    {
      question: "What was your motive to join this project?",
      answer:
        "This project was one of my first projects that I was given an opportunity to practice my design skills in real life. I joined as a volunteer and wanted to gain more experience as a designer.",
    },
    {
      question:
        "How did your initial research and user interviews influence the decision to include features like distance filters, specific food type filters, and the map-based exploration?",
      answer:
        "The very first option I have considered was distance. It does not matter if you are rich or poor, everyone considers time and they understand that convenience means that it is less spending on time to complete a task. They also understand that less time with more task done asks for higher cost. The distance was the first influential factor to consider and then time came after.",
    },
    {
      question:
        "With multiple features (search, scheduling, review system) outlined in your case study, how did you prioritize which features to develop first, and why did the search optimization take precedence?",
      answer:
        "Search came first to implement because if no such local had the grocery item you wanted in the map, you could not schedule to meet up with someone or be able to review anything.",
    },
    {
      question:
        "The design includes a 20-mile radius for identifying local food sources. How did you decide on that specific distance, and what data or user feedback supported this choice?",
      answer:
        "Since the project is still work-in-progress, the distance can be changed depending on the voices of the users. Though, the dinner times are usually between 5:30 pm and 7:30 pm. That's kind of the peak hours for most people and people want the food quick on their hands, so I thought that users might want to be able to find a grocery items as soon as possible to distribute more time in cooking, eating, and washing the dishes rather than spending a lot of time to hunt down the grocery item.",
    },
    {
      question:
        "How did you design the scheduling feature to facilitate easy coordination between food-givers and donation-receivers?",
      answer:
        "I usually use a scheduling platform called 'lettucemeet.com' which allows everyone to indicate their availabilities in terms of date and time in chunks. I also quite like the color green that is used to indicate the availability of everyone. I was inspired with this idea, so I have decided to take the motivation from lettucemeet.com. Basically, the food-givers and donation-receivers can direct themselves and indicate their availabilities on the calendar that acts just like lettucemeet.com as long as they have come to an agreement that they will share the food to each other.",
    },
  ],
};

export default websiteContent;
