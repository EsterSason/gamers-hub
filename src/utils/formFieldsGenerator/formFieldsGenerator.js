import React, { Component } from 'react';

class FormFieldsGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

    renderFields = () => {
      const formArray = [];
      const { formData } = this.props;
      // const keys = Object.keys(formData);
      // const values = Object.values(formData);


      // for (const elementName in this.props.formData) {
      //   formArray.push({
      //     id: elementName,
      //     settings: this.props.formData[elementName],
      //   });
      // }

      Object.keys(formData).forEach((key) => {
        formArray.push({
          id: key,
          settings: formData[key],
        });
      });


      return formArray.map(item => (
        <div key={item.config.name} className="form_element">
          {this.renderTemplates(item)}
        </div>
      ));
    }

  showLable = (show, lable) => (show
    ? <label>{lable}</label>
    : null)

    renderTemplates = (data) => {
      let formTemplate = '';
      const values = data.settings;

      switch (values.element) {
        case ('input'):
          formTemplate = (
            <div>
              {showLable(values.lable, values.lableText)}
              <input {...values.config} value={values.value} />
            </div>
          );
          // return (
          //   <div>input</div>
          // );
          break;
        default:
          formTemplate = null;
      }
      return formTemplate;
    }

    render() {
      return (
        <div>
          {this.renderFields()}
        </div>
      );
    }
}

export default FormFieldsGenerator;
