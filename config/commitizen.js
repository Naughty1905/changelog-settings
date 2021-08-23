"use strict";

const branchName = require('current-git-branch');

module.exports = {
    // Добавим описание на русском языке ко всем типам
    types: [
        {value: "feat", name: "feat:      Добавление нового функционала"},
        {value: "fix", name: "fix:       Исправление ошибок"},
        {value: "build", name: "build:     Сборка проекта или изменения внешних зависимостей"},
        {value: "docs", name: "docs:      Обновление документации"},
        {value: "perf", name: "perf:      Изменения направленные на улучшение производительности"},
        {value: "refactor", name: "refactor:  Правки кода без исправления ошибок или добавления новых функций"},
        {value: "style", name: "style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)"},
        {value: "test", name: "test:      Добавление тестов"},
        {value: "ci", name: "ci:        Настройка CI и работа со скриптами"},
    ],

    /*
    Область. Она характеризует фрагмент кода, которую затронули изменения.
    В данном случае ветка гита, название которой должно соответствовать задаче из jira.
    Например: DESIGNSYS-199.
    */
    scopes: [
        {name: branchName()},
    ],

    // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
    /*
    scopeOverrides: {
      fix: [
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

    messages: {
        type: "Какой тип изменений вы вносите?",
        scope: "\nВыберите ОБЛАСТЬ, которую вы изменили:",
        customScope: "Укажите свою ОБЛАСТЬ:", // Спросим если allowCustomScopes в true
        subject: "Напишите КОРОТКОЕ описание в заголовке коммита:\n",
        body: "Напишите ПОДРОБНОЕ описание (опционально) в теле коммита. Используйте \"|\" для новой строки:\n",
        breaking: "Список BREAKING CHANGES (опционально):\n",
        footer: "Место для мета данных (тикетов, ссылок и остального).\n",
        confirmCommit: "Вас устраивает получившийся коммит?"
    },

    // Разрешим собственную ОБЛАСТЬ
    allowCustomScopes: true,

    // Запрет на Breaking Changes
    allowBreakingChanges: ['feat', 'fix'],

    // Префикс для нижнего колонтитула
    footerPrefix: "МЕТА ДАННЫЕ:",

    // limit subject length
    subjectLimit: 72
};
