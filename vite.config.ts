import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
          gesht: resolve(__dirname, 'src/geshtTerap/index.html'),
          psan: resolve(__dirname, 'src/psychoAn/index.html'),
          bkgn: resolve(__dirname, 'src/biha-Kogn/index.html'),
          artrp: resolve(__dirname, 'src/artTerp/index.html')
      }
    }
  }
})

/*module.exports = {
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/index/main.js',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      filename: 'index.html',
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // когда используется строковый формат точки входа, то
    // шаблон будет определяться как `public/subpage.html`,
    // а если таковой не будет найден, то `public/index.html`.
    // Выходное имя файла будет определено как `subpage.html`.
    subpage: 'src/subpage/main.js'
  }
}

const pages ='./src/pages';
module.exports = {
    pages: {
          index: {// Это страница по умолчанию
                                     // Запись js, соответствующая странице
                  entry: pages+'/index/main.js',
                                       // Источник шаблона, то есть какой HTML-документ используется в качестве шаблона на текущей странице, public / index.html используется по умолчанию
                   template: pages+'/index/index.html',
                                       // В выходных данных dist / index.html используйте npm run build для компиляции выходного пути (относительно / dist)
                                       // Если вы хотите сгенерировать каталог, просто измените на «dirname / index.html»
                    filename: 'index.html',
           },
                       secondpage: // Недавно созданная вторая страница, в среде разработки, «secondpage» здесь является ссылкой маршрутизации
            {
            		entry: pages+'/second/second.js',
            		 template: pages+'/second/second.html',
            		 filename: 'second/second',
            }
}
*/




