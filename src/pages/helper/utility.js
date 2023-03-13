export const shortString = (walletAddress,numCharacters)=>{
        if (walletAddress.length <= numCharacters) {
          // Return the original address if it's already shorter or equal to the desired length
          return walletAddress;
        }

        // Calculate how many characters to keep from each end of the address
        const numEndChars = Math.ceil((numCharacters - 3) / 2);
        
        // Shorten the address by keeping the first and last numEndChars characters, with "..." in between
        const shortAddress = walletAddress.slice(0, numEndChars) + "..." + walletAddress.slice(-numEndChars+3);
        // console.log(shortAddress)
        return shortAddress;
      
}
