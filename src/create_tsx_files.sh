#!/bin/bash

# Скрипт для создания всех .tsx файлов из проекта Orchids в папке ui

# Создаем папку ui если она не существует
mkdir -p ui

# Массив всех .tsx файлов
tsx_files=(
    # Контакт формы
    "comprehensive-contact-form.tsx"
    
    # Функциональные секции
    "header-with-card-grid.tsx"
    "numbered-badge-cards.tsx"
    "three-column-image-cards.tsx"
    "two-column-with-image.tsx"
    
    # Подвалы
    "newsletter-footer.tsx"
    
    # Герои
    "two-column-hero-with-image.tsx"
    
    # Навигация
    "floating-navbar.tsx"
    
    # UI Компоненты
    "accordion.tsx"
    "alert-dialog.tsx"
    "alert.tsx"
    "aspect-ratio.tsx"
    "avatar.tsx"
    "background-boxes.tsx"
    "badge.tsx"
    "breadcrumb.tsx"
    "button.tsx"
    "calendar.tsx"
    "card.tsx"
    "carousel.tsx"
    "chart.tsx"
    "checkbox.tsx"
    "collapsible.tsx"
    "command.tsx"
    "ComponentSeparator.tsx"
    "container-scroll-animation.tsx"
    "context-menu.tsx"
    "dialog.tsx"
    "drawer.tsx"
    "dropdown-menu.tsx"
    "form.tsx"
    "hover-card.tsx"
    "input-otp.tsx"
    "input.tsx"
    "label.tsx"
    "menubar.tsx"
    "navigation-menu.tsx"
    "navigation.tsx"
    "pagination.tsx"
    "popover.tsx"
    "progress.tsx"
    "radio-group.tsx"
    "resizable.tsx"
    "scroll-area.tsx"
    "select.tsx"
    "separator.tsx"
    "sheet.tsx"
    "sidebar.tsx"
    "skeleton.tsx"
    "slider.tsx"
    "sonner.tsx"
    "switch.tsx"
    "table.tsx"
    "tabs.tsx"
    "textarea.tsx"
    "toggle-group.tsx"
    "toggle.tsx"
    "tooltip.tsx"
    
    # Утилиты
    "ErrorReporter.tsx"
)

# Функция для создания React компонента
create_tsx_template() {
    local filename=$1
    local component_name
    
    # Преобразуем имя файла в имя компонента (PascalCase)
    component_name=$(echo "$filename" | sed 's/\.tsx$//' | sed 's/-/ /g' | sed 's/\b\w/\u&/g' | sed 's/ //g')
    
    cat > "ui/$filename" << EOF
import React from 'react';

interface ${component_name}Props {
  // Define your props here
}

const ${component_name}: React.FC<${component_name}Props> = (props) => {
  return (
    <div>
      {/* ${component_name} component */}
      <h1>${component_name}</h1>
    </div>
  );
};

export default ${component_name};
EOF
}

echo "🚀 Создание ${#tsx_files[@]} .tsx файлов в папке 'ui'..."

created_count=0
skipped_count=0

for file in "${tsx_files[@]}"; do
    if [[ -f "ui/$file" ]]; then
        echo "  ⚠️  $file уже существует, пропускаем..."
        ((skipped_count++))
    else
        create_tsx_template "$file"
        echo "  ✅ Создан: $file"
        ((created_count++))
    fi
done

echo ""
echo "📊 Результат:"
echo "  Создано новых файлов: $created_count"
echo "  Пропущено существующих: $skipped_count"
echo "  Общее количество файлов: ${#tsx_files[@]}"
echo ""
echo "📁 Все файлы созданы в папке: $(pwd)/ui"