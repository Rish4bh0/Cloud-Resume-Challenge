import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, NetworkIcon, PhoneIcon, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-16 md:p-16">
      <section className="mx-auto w-full max-w-xl space-y-3 bg-white print:space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-0.5">
            <h1 className="inline-flex items-center justify-center gap-x-1 leading-none text-2xl font-bold">
            <a className="hover:underline" href={RESUME_DATA.name}>
                        {RESUME_DATA.name}
                      </a>

                      <span className="inline-flex gap-x-1">
                      
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[9px] print:leading-tight print:px-1 print:py-0.5"
                           
                          >
                            {RESUME_DATA.role}
                          </Badge>
                      
                      </span>
            </h1>
            
            {/*
           <p className="max-w-full text-pretty font-mono text-sm text-muted-foreground print:text-[11px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <PhoneIcon className="size-3" />
                {RESUME_DATA.about}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.mailLink}
                target="_blank"
              >
                <MailIcon className="size-3" />
                {RESUME_DATA.mail}
              </a>
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.webLink}
                target="_blank"
              >
                <WebcamIcon className="size-3" />
                {RESUME_DATA.website}
              </a>
            </p>
            */}
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
              
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.website ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`${RESUME_DATA.webLink}`}>
                    <NetworkIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
             
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden text-center gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[11px]">
              <a
                className="inline-flex items-center gap-x-1"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="inline-flex items-center gap-x-1">
                   <MailIcon className="size-3" />
                  <span >{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`} className="inline-flex items-center gap-x-1">
                  <PhoneIcon className="size-3"/>
                  <span >{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.website ? (
                <a href={RESUME_DATA.webLink} className="inline-flex items-center gap-x-1">
                  <NetworkIcon className="size-3"/>
                  <span >{RESUME_DATA.website}</span>
                </a>
              ) : null}
            </div>
          </div>
{/*
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
          */}
        </div>
        
        <Section className="">
          <h2 className="text-lg font-bold print:text-[14px]">About</h2>
          <p className="max-w-full text-pretty font-mono text-sm text-muted-foreground print:text-[11px] ">
            {RESUME_DATA.summary}
          </p>
        </Section>
        
        <Section >
          <h2 className="text-lg font-bold print:text-[14px]">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base ">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline print:text-[12px]" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[9px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm text-gray-500 print:text-[10px]">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[11px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[11px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-lg font-bold print:text-[14px]">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card className ="print:text-[12px]" key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base print:text-[12px]">
                    <h3 className="font-semibold leading-none print:text-[12px]">
                      {education.school}
                    </h3>
                    <div className="text-sm text-gray-500 print:text-[10px]">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree && <p className="text-pretty font-mono  text-xs print:text-[11px] text-muted-foreground">{education.degree}</p>}
                 {education.courseWork && <p className="text-pretty font-mono  text-muted-foreground text-xs print:text-[11px]">{education.courseWork}</p>}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-lg font-bold print:text-[14px]">Hard Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-lg font-bold print:text-[14px]">Soft Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.softSkills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16 ">
          <h2 className="text-lg font-bold print:text-[14px]">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
