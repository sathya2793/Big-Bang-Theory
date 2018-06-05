  let bang = JSON.parse(bigbang);
  let particularEpisode = (seasonNumber, episodeNumber) => {
    let count = 0
    for (let episode of bang._embedded.episodes) {
      if (episode.season == seasonNumber && episode.number == episodeNumber) {
        count++
        alert(`Season Number is :${episode.season}\nEpisode Number is :${episode.number}\nInformation about the episode :\n${JSON.stringify(episode)}`)
      } // end of if
    } // end of for loop
    if (count == 0) {
      alert(`Please enter the valid Season and episode number`)
    } // end of If

  } // end of particularEpisode function

  let particularEpisodeId = (episodeId) => {
    let count = 0
    for (let episode of bang._embedded.episodes) {
      if (episode.id == episodeId) {
        count++
        alert(`Id of this episode is :${episode.id}\nInformation about the episode :\n${JSON.stringify(episode)}`)
      } // end of if
    } // end of for loop
    if (count == 0) {
      alert(`Please enter the valid ID`)
    } // end of if
  } // end of particularEpisodeId function

  let particularEpisodeName = (episodeName) => {
    let count = 0
    for (let episode of bang._embedded.episodes) {
      if (episode.name === episodeName) {
        count++
        alert(`Name of this episode is :${episode.name}\nInformation about the episode :\n${JSON.stringify(episode)}`)
      } // end of if
    } // end of for loop
    if (count == 0) {
      alert(`Please enter the valid Episode Name`)
    } // end of If
  } // end of particularEpisodeName function

  let a = 1
  do {

    let menu = prompt(`Enter any number from 1 to 4:\n1:Search by season and episode number\n2:Search by episode Id\n3:Search by episode name\n4:Exit`)
    if (menu < 5 && menu > 0) {
      switch (menu) {
        case "1":
          let season = prompt(`Enter the season number:`)
          let episode = prompt(`Enter the episode number:`)
          particularEpisode(season, episode)
          break
        case "2":
          let episodeId = prompt(`Enter the episode Id:`)
          particularEpisodeId(episodeId)
          break
        case "3":
          let episodeName = prompt(`Enter the episode name:`)
          particularEpisodeName(episodeName)
          break
        case "4":
          alert(`Program End`)
          a = 0
      } //end of switch
    } else {
      alert(`Please enter the number 1 to 4`)
    }
  } while (a) // end of do..while
