const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg0MDliMGMwYjZkOTdjNzJiMGY1Y2E0YzRlMjQ4ZSIsIm5iZiI6MTczMDIxNzYyMi4wNTc5OTk4LCJzdWIiOiI2NzIxMDY5NjRiZTE1NDY5ZTcwZTc5MGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Nic-CmTvUDwgOJeOhFsiccXS6A9hSnF2fNfzfQ8wLdk'
  }
};

 export async function instanseFetch(){
    const response = await fetch(`https://api.themoviedb.org/3/account/21599548/favorite ` , options)
    const data = await response.json()
    return data
 }