import { Code, Users, TrendingUp, DollarSign } from "lucide-react";

const categories = {
  engineering: {
    icon: <Code size={18} />,
    title: "Production Systems",
    symbol: "</>",
    links: [
      {
        id: "eng1",
        title: "Applitrack",
        url: "https://www.applitrack.com/u46/onlineapp/default.aspx",
      },
      {
        id: "eng2",
        title: "Academics Credits Entry",
        url: "https://district.u-46.org/AcademicCredits/login.cfm",
      },
      { id: "eng3", title: "API Reference", url: "https://swagger.io/docs/" },
      {
        id: "eng4",
        title: "Frontline",
        url: "https://login.frontlineeducation.com/login?signin=262db45e8e1287ccf045ab97bcea39b1&amp;productId=recruit&amp;clientId=recruit#/login",
      },
      {
        id: "eng5",
        title: "GCN",
        url: "https://site.gcntraining.com/",
      },
      { id: "eng6", title: "Infinite Campus", url: "https://roadmap.sh" },
      {
        id: "eng7",
        title: "Munis MSS",
        url: "https://selfservice.u-46.org/",
      },
      {
        id: "eng8",
        title: "Munis Prod",
        url: "https://tylerhub.u-46.org/",
      },
      {
        id: "eng9",
        title: "Munis Support",
        url: "http://www.tylertech.com/client-support/munis-support",
      },
      {
        id: "eng10",
        title: "Old SSRS",
        url: "http://sadmsql01/Reports/Pages/Folder.aspx?ItemPath=%2fU-46+Custom+Reports&amp;ViewMode=Detail",
      },
      {
        id: "eng11",
        title: "Red Rover",
        url: "https://app.redroverk12.com/",
      },
      {
        id: "eng12",
        title: "U-46 SSRS",
        url: "https://sadmsql03.admin.com/reports",
      },
      {
        id: "eng13",
        title: "WorkForce",
        url: "https://workforce-prod.u-46.org/workforce/Desktop.do",
      },
      {
        id: "eng14",
        title: "Archived Files",
        url: "https://drive.google.com/drive/folders/0AEnptwaxA7JxUk9PVA",
      },
      {
        id: "eng15",
        title: "ETA Contract Deadlines",
        url: "https://docs.google.com/spreadsheets/d/1tir8OhSYDUGKNtObwbiZFo1L74myAlLvdDMaCV518q8/edit?gid=439346974#gid=439346974",
      },
      {id: "eng16",
       title: "Infinite Campus",
       url: "https://campus.u-46.org/campus/u46.jsp",
    ],
  },
  hr: {
    icon: <Users size={18} />,
    title: "Non-Production Systems",
    symbol: "👥",
    links: [
      {
        id: "hr1",
        title: "Munis Self Service Test",
        url: "https://selfservice.u-46.org/MSSTest",
      },
      {
        id: "hr2",
        title: "Munis Self Service Test 2",
        url: "https://selfservice.u-46.org/MSSTest",
      },
      {
        id: "hr3",
        title: "Munis Self Service Test 3",
        url: "https://hr.mycompany.com/time-off",
      },
      {
        id: "hr4",
        title: "Munis Self Service Train",
        url: "https://selfservice.u-46.org/MSSTrain",
      },
      {
        id: "hr5",
        title: "Munis Test 1",
        url: "https://www.udemy.com/",
      },
      {
        id: "hr6",
        title: "Munis Test 2",
        url: "https://www.theorg.com/org-chart",
      },
      {
        id: "hr7",
        title: "Munis Test 3",
        url: "https://www.bamboohr.com/",
      },
      {
        id: "hr8",
        title: "Munis Train",
        url: "https://www.linkedin.com/jobs/",
      },
      {
        id: "hr9",
        title: "Work Force Test",
        url: "https://expense.mycompany.com/",
      },
      {
        id: "hr10",
        title: "WorkForce Training",
        url: "https://www.zenefits.com/hr-guides/company-policies/",
      },
      {
        id: "hr11",
        title: "Skyward Training",
        url: "https://www.shrm.org/resourcesandtools/hr-topics/pages/default.aspx",
      },
      {
        id: "hr12",
        title: "ISBE Training",
        url: "https://www.shrm.org/resourcesandtools/hr-topics/pages/default.aspx",
      },
    ],
  },
  marketing: {
    icon: <TrendingUp size={18} />,
    title: "Additional Resources",
    symbol: "📈",
    links: [
      {
        id: "mark1",
        title: "Board Policies",
        url: "https://www.u-46.org/Page/9041",
      },
      {
        id: "mark2",
        title: "Document Receipt/ Acknowledgment",
        url: "https://district.u-46.org/documents",
      },
      {
        id: "mark3",
        title: "Footprints",
        url: "http://footprints/MRcgi/MRentrancePage.pl",
      },
      {
        id: "mark4",
        title: "Intranet",
        url: "https://www.u-46.org/site/Default.aspx?PageType=7&amp;SiteID=10261",
      },
      { id: "mark5", title: "Marketing Assets", url: "https://canva.com/" },
      {
        id: "mark6",
        title: "Licensure",
        url: "https://webapps.u-46.org/Licensure/",
      },
      {
        id: "mark7",
        title: "Professional Credit Tracking",
        url: "https://district.u-46.org/professionalcredit",
      },
      {
        id: "mark8",
        title: "Staffing WebApp",
        url: "https://webapps.u-46.org/staffing",
      },
      {
        id: "mark9",
        title: "ETA Staffing Timeline",
        url: "https://docs.google.com/spreadsheets/d/19y03uXKOp26Rp2-8nDKORUntWu7u_bP33NVK1Gz_byA/edit?gid=1006670172#gid=1006670172",
      },
      {
        id: "mark10",
        title: "Tableau",
        url: "https://tableau.u-46.org/",
      },
      {
        id: "mark11",
        title: "TAP",
        url: "https://appraisal.u-46.org/index.cfm",
      },
      {
        id: "mark12",
        title: "Substitute Handbook",
        url: "https://drive.google.com/file/d/1wDG-Rkv7po2ZrYkvXX9CQsnI7g0D9hPO/view?usp=sharing",
      },
      {
        id: "mark13",
        title: "Red Rover Information",
        url: "https://drive.google.com/file/d/1ZMMxC_du1RkV_UpcGhz4J8DF2yB8A0rm/view?usp=drive_link",
      },
      {
        id: "mark14",
        title: "Long Term Substitute Vacancy Tutorial",
        url: "https://drive.google.com/file/d/1zKGo71RktvDVLXc5eKsaOME2LSiPVrgQ/view?usp=drive_link",
      },
      {
        id: "mark15",
        title: "Communications & Community Relations Request Form",
        url: "https://district.u-46.org/schoolcommunityrelations",
      },
      {
        id: "mark16",
        title: "2024-25 School Building Directory",
        url: "https://www.u-46.org/Page/20381",
      },
      {
        id: "mark17",
        title: "Substitute Evaluation Form",
        url: "https://drive.google.com/drive/u/0/folders/13tHjUYHnK0tmB2K4b3UnTOq8CZVCRUrM",
      },
    ],
  },
  finance: {
    icon: <DollarSign size={18} />,
    title: "Process Documents",
    symbol: "$",
    links: [
      {
        id: "fin1",
        title: "Admin Calendar",
        url: "https://calendar.google.com/calendar/u/0/embed?src=c_9aea9b173573d51bbfc1a5c27c2b7e820d9edb6a41fb778e5ad08fbe71fb2c2e@group.calendar.google.com&amp;ctz=America/Chicago",
      },
      {
        id: "fin2",
        title: "Candidate Evaluation Tool",
        url: "https://drive.google.com/drive/u/2/folders/1PT0MCaYoov2hvWka6lk7BpwInMtusonH",
      },
      {
        id: "fin3",
        title: "Employee Reference Check Form",
        url: "https://drive.google.com/drive/u/2/folders/1wKY_rabTs1b9krO74GOYbOnYiLRFsG28",
      },
      {
        id: "fin4",
        title: "Exposure Reporting",
        url: "https://district.u-46.org/exposurereporting/login.cfm",
      },
      {
        id: "fin5",
        title: "ETA Staffing Timeline",
        url: "https://docs.google.com/spreadsheets/d/19y03uXKOp26Rp2-8nDKORUntWu7u_bP33NVK1Gz_byA/edit?gid=1006670172#gid=1006670172",
      },
      {
        id: "fin6",
        title: "Fingerprint and Background Check Portal",
        url: "https://webapps.u-46.org/HRPortal/index.cfm",
      },
      {
        id: "fin7",
        title: "Fingerprint Guide",
        url: "https://drive.google.com/file/d/1PLDCoQQiKZ7l_vfBjvwK_sWyrDeU0hQC/view?usp=drive_link",
      },
      {
        id: "fin8",
        title: "HR - School Network Support",
        url: "https://drive.google.com/file/d/1sdc9ZzqYEhiM3nevUMxEbLS_B4OF2QF0/view?usp=drive_link",
      },
      {
        id: "fin9",
        title: "HR - Who Does What List",
        url: "https://drive.google.com/file/d/1I_GhQ59OGdt-LDU_QP64px6ahZiGlUg1/view?usp=sharing",
      },
      {
        id: "fin10",
        title: "Interview Evaluation Form",
        url: "https://docs.google.com/forms/d/1jUJmAzZBRdIFuITlXFgMtX2PcYNFW1gj2JURXjOVxto/viewform?edit_requested=true",
      },
      {
        id: "fin11",
        title: "Personal Day Next to a Holiday Request Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScrFvLG4Fd_vxtD2a98nxyraL5JXq-o2R2biXS7yXdnuyX5TQ/viewform",
      },
      {
        id: "fin12",
        title: "Seperation/Termination",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSezS6U-sU0O9_Cf09Pptt6ENCPHzLO-BbWzuGypYlskk0rwEQ/viewform",
      },
      {
        id: "fin13",
        title: "Staffing Appeal",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSciaJ8N3_2lvUAWQ-nnGTly4WYm8EIlg6MYsdJSVw9z8bD_bA/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0",
      },
      {
        id: "fin14",
        title: "2024-25 Job Offer Request Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSekXkVBXSNPJ5fTlqTvOUEPulxSX_cWmvC9XZh-bAacEuDwtg/viewform",
      },
      {
        id: "fin15",
        title: "2024-25 Job Offer Request Status Dashboard",
        url: "https://lookerstudio.google.com/u/0/reporting/67f3d570-644e-4d8c-a1ef-b77dd57dd4da/page/XMdkD",
      },
      {
        id: "fin16",
        title: "2025 Summer Job Offer Request Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeoI_xqQpNa7RFj2VPezzuPKZDt3RbjbygSsA0Xci3SE01imw/viewform",
      },
      {
        id: "fin17",
        title: "2025-26 Job Offer Request Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeJA6SuY6cVkLE1Z0NAqe6QXNCTwzY_QmPjKXWVwxzrI0B3vg/viewform",
      },
      {
        id: "fin18",
        title: "2025-26 Job Offer Request Status Dashboard",
        url: "https://lookerstudio.google.com/s/kONL7ud7SOQ",
      },
    ],
  },
};

export default categories;

