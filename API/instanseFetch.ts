
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg0MDliMGMwYjZkOTdjNzJiMGY1Y2E0YzRlMjQ4ZSIsIm5iZiI6MTczMDIxNzYyMi4wNTc5OTk4LCJzdWIiOiI2NzIxMDY5NjRiZTE1NDY5ZTcwZTc5MGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Nic-CmTvUDwgOJeOhFsiccXS6A9hSnF2fNfzfQ8wLdk'
    }
  };

  export async function instanseFetch(link:string){
    const response = await fetch(`${link} ` , options)
    const data = await response.json()
    return data
} 




  // export async function instanseFetch(link:string){
  //   const response = await fetch(`${link} ` , {
  //     ...options ,
  //     next: {revalidate: 1800},
  //     cache: 'force-cache'
  //   })
  //   const data = await response.json()
  //   return data