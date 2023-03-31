

// a) String compress

const str1 = 'wwyyaaaxxxbbbbccdd';
var finalOutput="";
var finaloutprint="";
const compressString = (s = '') => {

    let num = s.length; //calculating length of the string
    let i=0; 
    var output="";
    while ( i < num) {
        
        // Counting the repetitions of each character 
        let repetition = 1;
        while (s[i] == s[i+1] && i < num-1 ) {
            repetition++;
            i++;
        }  
        // Print character and its count
      output+=s[i]+repetition;
      
        i++;
    }
   return output;  
};
const compresecount = (s = '') => {

    let num = s.length; //calculating length of the string
    var temp="";
    var cnt=0;
    temp+=s[0];
    for(var i=1;i<num;i+=2)
    {
      if(cnt!=0)
      {
                if(cnt==s[i])
                {
                    temp+=s[i-1];
                }
                else 
                {  temp+=cnt;
                    temp+=s[i-1];
                  
                } 
      }
      cnt=s[i];
    }
    temp+=cnt;
    console.log(temp);

    //print temp
    var temp2="";
    let regex = /\D/;
    let index=0;
    for(let i=0;i<temp.length;i++)
    {
        let bool = regex.test(temp[i]);
          // let number = Number(temp[i]);
           if (bool) {  
           }
           else{
                //console.log(temp[i]+i);
                let cnt1=temp[i];
            for(let k=index;k<i;k++)
            {
               for(let j=0;j<cnt1;j++)
               {
                temp2+=temp[k];
               }
               index=i+1;
            }
           }
    }


    return temp2;  
    };
    

console.log(finalOutput=compressString(str1));
console.log(finaloutprint=compresecount(finalOutput));