
            function myalert(msg) {
                if(confirm("Are You Sure You Want to Display The Message??"))
                {
                    alert(msg);
                }
                else
                {
                    alert("can't display msg bcoz user cancelled the operation");
                }
            }