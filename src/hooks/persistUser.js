export default function persistUser(context,setContext,localStorage){
    if (localStorage) {
      setContext({
        ...context, config: {
          headers: {
            "Authorization": `Bearer ${localStorage.token}`
          }
        }
      });
    } 
}