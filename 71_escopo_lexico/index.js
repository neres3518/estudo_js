const name = 'Neres'

function speakName() {
  console.log(name);
}

function useSpeakName() {
  const name = 'David'
  speakName()
}
useSpeakName(); //--> run speakName
