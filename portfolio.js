
class FormSubmit{

  constructor(settings){
    this.settings = settings
    this. form = document.querySelector(settings.form);
    this.formbuttonormbutton = document.querySelector(settings.button);
    if(this.form){
      this.url = this.form.getAttribute("action");
    }
  }

  displaySuccess(){
    this.form.innerHTML = this.settings.success;
  }

  displayError(){
    this.form.innerHTML = this.settings.error;
  }

  getformobject(){
    const formobject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formobject[field.getAttribute("name")] = field. value;
    });
      return formobject;
  }




    
  
  async sendform(){
  try{
    await  fetch(this.url, {
      method:"POST",
      headers:{"Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(this.getformobject()),
  }
      );

      this.displaySuccess();
    
  }
  catch(error){

    this.displayError();
    throw new Error (error)

  }
}




    init(){
      if(this.form) this.formbutton.addEventListener("click", () => this.displaySuccess());
      return this;
    }

}
