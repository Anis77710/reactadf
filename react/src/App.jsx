import React from 'react'
import Cards from './components/Cards'

 const jobs = [
  {
    logo: "https://imgs.search.brave.com/Yg9ic8fIwahAk2YVZ4AGSqXYk54xJhokaG0va66AWsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0LzI5/LzZhL2Y0Mjk2YWUy/ZjRjNzE2NjVkZGM4/OTgwZTAyN2Y5OGFl/LmpwZw",
    company: "Meta",
    position: "Software Engineer",
    employmentType: "Full Time",
    level: "Junior Level",
    posted: "5 days ago",
    rate: "$60",
    location: "Mumbai, India",
  },
  {
    logo: "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    company: "Google",
    position: "Frontend Developer",
    employmentType: "Full Time",
    level: "Senior Level",
    posted: "3 days ago",
    rate: "$55",
    location: "Bangalore, India",
  },
  {
    logo: "https://imgs.search.brave.com/WHlEEiW1lJiRZFulcHzPa_sc-9l2iXvLXkGqG-15-pE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
    company: "Microsoft",
    position: "Backend Developer",
    employmentType: "Full Time",
    level: "Junior Level",
    posted: "7 days ago",
    rate: "$58",
    location: "Hyderabad, India",
  },
  {
    logo: "https://imgs.search.brave.com/bG-xPD1-pu6r_82Ng7Quwo5_-vgop94F01k_siJATSY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    company: "Netflix",
    position: "UI/UX Designer",
    employmentType: "Part Time",
    level: "Intern",
    posted: "1 day ago",
    rate: "$50",
    location: "Delhi, India",
  },
  {
    logo: "https://imgs.search.brave.com/x9z5DMa17kPFP-WD23JExZ23Br1oZhMgVNH4KW7juLs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzUz/LzQ2L2U5NTM0NjY0/N2Q0N2M2ZTJmZjAy/ZDdlMGM0NWRjM2Jl/LmpwZw",
    company: "Apple",
    position: "iOS Developer",
    employmentType: "Part Time",
    level: "Junior Level",
    posted: "4 days ago",
    rate: "$62",
    location: "Pune, India",
  },
  {
    logo: "https://imgs.search.brave.com/4zP2PxFa7n7BfzjznL7o5Rfs3TNNpTDbyKSbiJr5VCU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2h5LWlzLXRoZS1z/cG90aWZ5LWxvZ28t/c2xpZ2h0bHktdGls/dGVkLXYwLWxhM3E4/aHg3bTZrZDEucG5n/P2Zvcm1hdD1wbmcm/YXV0bz13ZWJwJnM9/ODFmMjk0NTBkMWE1/NWMwMmE1YmRmYjZl/N2NiMDVjNjE1N2Mz/YmQ5ZA",
    company: "Spotify",
    position: "Full Stack Engineer",
    employmentType: "Full Time",
    level: "Senior Level",
    posted: "2 days ago",
    rate: "$57",
    location: "Chennai, India",
  },
  {
    logo: "https://imgs.search.brave.com/Qii-GwJLoZOaq6fmXVcY1Rt1rN-3flbBYfKOngU-NtM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzgv/MDEyLzQ3MC9zbWFs/bC9iYW5na29rLXRo/YWlsYW5kLWp1bHkt/MTktMjAyMy10ZXNs/YS1sb2dvLXNpZ24t/dGVzbGEtaW5jLWlz/LWFuLWFtZXJpY2Fu/LW11bHRpbmF0aW9u/YWwtYXV0b21vdGl2/ZS1hbmQtY2xlYW4t/ZW5lcmd5LWNvbXBh/bnktdGhhdC13YXMt/Zm91bmRlZC1pbi1q/dWx5LTEtMjAwMy1m/cmVlLXBob3RvLmpw/Zw",
    company: "Tesla",
    position: "Software Engineer",
    employmentType: "Full Time",
    level: "Intern",
    posted: "6 days ago",
    rate: "$59",
    location: "Noida, India",
  },
  {
    logo: "adobe.png",
    company: "Adobe",
    position: "Cloud Engineer",
    employmentType: "Full Time",
    level: "Junior Level",
    posted: "8 days ago",
    rate: "$63",
    location: "Kolkata, India",
  },
  {
    logo: "intel.png",
    company: "Intel",
    position: "DevOps Engineer",
    employmentType: "Part Time",
    level: "Junior Level",
    posted: "2 days ago",
    rate: "$54",
    location: "Ahmedabad, India",
  },
  {
    logo: "samsung.png",
    company: "Samsung",
    position: "Android Developer",
    employmentType: "Full Time",
    level: "Junior Level",
    posted: "9 days ago",
    rate: "$56",
    location: "Surat, India",
  },
];


const App = () => {
  return (
    <div className='min-h-screen bg-black w-full p-10 flex flex-wrap gap-10'>
      {jobs.map(function (elem, index) {
        return <Cards key={index} data={elem} logo={elem.logo} company={elem.company} level={elem.level} posted={elem.posted} position={elem.position} rate ={elem.rate} employmentType={elem.employmentType} location={elem.location} />;
      })}
    </div>
  );
};

export default App