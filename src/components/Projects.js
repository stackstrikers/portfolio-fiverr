import React from "react";
import Project from "./Project";
import classes from "../styles/Projects.module.css";

const projects = [
  {
    href: "https://thegoaffect.updeft.com/",
    title: "Kitchen Essentials",
    subtitle: "An ecommerce website which sells Kitchen niche Products",
  },
  {
    href: "https://aaasuperservice.com/",
    title: "AAA SUPER SERVICE",
    subtitle: "An ecommerce website which sells Sports niche Products",
  },
  {
    href: "https://nishi.webtalkee.art/",
    title: "Foreo",
    subtitle: "A ecommerce website which serves room and hotel booking",
  },
  {
    href: "https://alessandramastrantonio.com/",
    title: "Alessandra Mastrantonio",
    subtitle:
      "A portfolio website of an Instagram Influencer, Digital Marketer and Content Creator",
  },
  {
    href: "https://aaaaassociates.com/",
    title: "AAAA ASSOCIATES",
    subtitle: "An ecommerce website which sells Baseball niche items",
  },
  {
    href: "https://marketingbay.xyz/",
    title: "Marketing Bay",
    subtitle:
      "A website which Provides Payment Gateway Solution and IT service marketing on behalf of their clients",
  },
  {
    href: "https://taraaz.com.bd/",
    title: "Taraaz BD",
    subtitle: "A website which sells Food Suppliment Products and other items",
  },
  {
    href: "https://besttoolsforstartups.com/",
    title: "Best Tools for Startups",
    subtitle: "A website which deals with IT startup softwares from Appsumo",
  },
  {
    href: "https://ecofriendlyfact.com/",
    title: "Eco Friendly Fact",
    subtitle:
      "A website which publishes eco friendly blog, facts, news and sale products",
  },
  {
    href: "https://ecomarinebd.com/",
    title: "Eco Marine",
    subtitle: "A website for cruise tourism business located in Dhaka",
  },
  {
    href: "https://derbylabourparty.org.uk/",
    title: "Derby Labour Party",
    subtitle:
      "it's an introduction website for Derby Labour Party, A branch of Labour Party, One of the major political party of UK, soon to be launch as their site.",
  },
  {
    href: "https://artistrybysiyah.art/",
    title: "Artistry By Siyah",
    subtitle:
      "This website was designed and developed for an individual who runs a page that sales self made artistic products",
  },
  {
    href: "http://beauty1.webtalkee.art/",
    title: "Budget Beauty Shop",
    subtitle:
      "This website was designed and developed for an individual who runs a business that sales beauty products",
  },
  {
    href: "http://ecom2.webtalkee.art/",
    title: "Aarong",
    subtitle:
      "This website was designed and developed for a company who runs multi product online store",
  },
  {
    href: "http://ecom1.webtalkee.art/",
    title: "Lucrative Garments",
    subtitle:
      "This website was designed and developed for a Garments factory who sells garment related products",
  },
  {
    href: "https://entanish.com/",
    title: "Entanish",
    subtitle:
      "A website of e-commerce focusing on ladies items like bag, shoe etc designed for client",
  },
  {
    href: "https://sundarbanpestcontrol.com/",
    title: "Sundarban Pest Control",
    subtitle: "This was designed and developed for a pest control company",
  },
  {
    href: "https://digitalb2bmarketing.com",
    title: "Digital B2B Marketing",
    subtitle:
      "A website which provides Digital Services as well as Lead Generation, SEO",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="container">
        <div className={classes.projects__wrapper}>
          {projects.map((project, index) => (
            <Project project={project} id={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
