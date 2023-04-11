const inventoryFormHandler = async (event) => {
    event.preventDefault();
  
    const inventoryname = document.querySelector('#inventory-name').value.trim();
    
  
    if (inventoryname) {
      const response = await fetch(`/api/inventory`, {
        method: 'POST',
        body: JSON.stringify({ name: inventoryname}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add to inventory');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document
    .querySelector('.new-inventory-form')
    .addEventListener('submit', inventoryFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  