import React from 'react'

const mystyle={
    heading: {
        backgroundColor:"gray",
        color:"white",
        textAlign:"center",
        padding:10
    },
    paragraph:{
        backgroundColor:"black",
        color:"white",
        textAlign:"justify",
        padding:10
    },
    red:{
        backgroundColor:"red"
    },
    purple:{
        backgroundColor:"purple"
    },
    yellow:{
        backgroundColor:"yellow",
        color:"black"
    }
}

export default function CssExample() {
  return (
    <>
     <div className="main">
        <div className="center">
        <h1
        style ={{
            backgroundColor:"navy",
            color:"yellow",
            textAlign:"center",
            padding:10
        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, necessitatibus.</h1>
        <h1 style={mystyle.heading}>Est quisquam libero saepe! Nam cum optio ad sapiente amet.</h1>
        <h1 style={{...mystyle.heading,...mystyle.red}}>Consectetur dolorem quo, in quasi adipisci facilis hic debitis necessitatibus.</h1>
        <h1 style={{...mystyle.heading,...mystyle.purple}}>Vero architecto similique et, ducimus officia at nulla non exercitationem.</h1>
        <h1 style={{...mystyle.heading,...mystyle.yellow}}>Veritatis facilis vero dolore culpa, esse eaque accusantium ipsam ratione.</h1>    

        <p style={{
            backgroundColor:"green",
            color:"yellow",
            textAlign:"justify",
            padding:10
        }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae reiciendis neque provident aliquid voluptatum vel numquam dolorem velit, doloremque possimus itaque. Et esse, mollitia unde error fugit quod laudantium nostrum accusantium in? Libero reiciendis totam dolore, voluptate, praesentium ipsum eum porro, omnis expedita dolorem neque repellendus aperiam explicabo. Totam aliquam dolores placeat! Tempore quasi ullam cumque magnam? Quo alias delectus sequi itaque quasi accusamus nam dignissimos! Esse quam, laborum adipisci rerum saepe earum corporis. Exercitationem provident architecto soluta rem, veniam nobis eveniet. Harum in alias vel, culpa repudiandae voluptatibus? Perspiciatis eligendi ducimus quos quia similique impedit perferendis dolore? Ducimus.</p>
        <p style={mystyle.paragraph}>Dolores consectetur deleniti numquam eaque maxime eum laboriosam quae et cum obcaecati voluptate soluta voluptatibus commodi, suscipit debitis similique optio quidem nemo sed minus repudiandae dicta? Beatae delectus harum explicabo, cumque illo eveniet! Nulla, incidunt at sed id velit eum quam repudiandae sequi ullam saepe doloribus. Exercitationem recusandae ea nulla quia tempora eum esse, nemo modi velit at tenetur distinctio suscipit veniam quaerat repudiandae alias. Earum perferendis vel doloremque provident excepturi asperiores. Accusamus architecto suscipit praesentium, quod exercitationem ipsa repellat eos. Tempore, maxime! Magni sit asperiores inventore similique repellat temporibus illum, unde reprehenderit assumenda dolores ipsam, nisi possimus tenetur at.</p>
        <p style={{...mystyle.paragraph,...mystyle.red}}>Quis natus hic deserunt nihil! Nostrum esse dolores dicta perspiciatis quidem fugit hic animi. Repellendus eum molestias pariatur. Totam quas cum amet, molestias mollitia excepturi voluptates consequatur id odit dicta magnam fuga nemo facere vel nam aliquid incidunt suscipit saepe magni doloribus a. Deleniti iste, dolor pariatur voluptas ad ducimus quaerat ex cupiditate error necessitatibus nobis dolores. Cupiditate ipsum omnis neque dolorum, dignissimos officia ullam eos voluptatum possimus aliquid! Aut dolorem impedit ullam quis sunt, sed odio architecto ea dignissimos beatae corrupti obcaecati et facilis deleniti velit odit minima nam aliquid expedita ut, omnis id eaque qui optio! Atque, quis?</p>
        <p style={{...mystyle.paragraph,...mystyle.purple}}>Inventore doloribus delectus quae ipsam eveniet odio minima ipsa sunt ab velit, excepturi sequi, corporis nam fuga ipsum beatae quod consequuntur cupiditate, aspernatur ad similique necessitatibus assumenda a magnam? Fugiat explicabo quod accusamus nobis eaque ut, officia atque placeat corporis, maxime voluptatum quae expedita ea alias culpa non. Reiciendis officiis, doloribus culpa provident tenetur voluptates illum nihil recusandae, tempora dicta, incidunt dignissimos laudantium consectetur distinctio itaque voluptatibus dolore saepe quo. Repellat dicta unde dolore nostrum saepe, enim eaque quo ducimus, excepturi quod fugit? Maxime quis perspiciatis totam incidunt reprehenderit amet quas tenetur dolorem eligendi tempora. Consequuntur corporis ullam vitae adipisci.</p>
        <p style={{...mystyle.paragraph,...mystyle.yellow}}>Vero dolores magnam id distinctio, velit laudantium, assumenda laborum ad enim accusamus magni veritatis dicta dolorum consequuntur unde sunt? Quidem, unde autem animi nisi corporis doloribus nam aliquam quam. Ratione eveniet eum dolorem. Adipisci quasi obcaecati at tenetur quae maiores neque rerum error? Quia doloremque, sit suscipit repellat at alias numquam hic odit, temporibus asperiores illo rem neque natus qui quis optio recusandae eos fugiat, soluta quod architecto veniam nobis accusantium! Excepturi dicta aspernatur doloremque incidunt cum obcaecati rerum laborum voluptatibus tenetur enim at, sequi maiores. Consectetur, amet enim. Ut tempore minima aspernatur cum perferendis iure officia facere dolorem possimus.</p>
            </div></div> 
    </>
  )
}
