import {Component, OnInit} from '@angular/core';
import {AllAction} from '../modal/AllAction';
import {AllActionServiceService} from '../service/dashboard/all-action-service.service';
import {finalize, tap} from 'rxjs/operators';
import * as CanvasJS from 'src/app/scripts/canvasjs.min';
import {CardsService} from '../service/dashboard/cards.service';
import {Cards} from '../modal/cards';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AllActionServiceService, CardsService]
})
export class DashboardComponent implements OnInit {

  allActionList: AllAction[] = [];
  cardsData: Cards = new Cards(); //  объект поля которого хранят дату для заполнения 4 карт

  constructor(private httpAllActionService: AllActionServiceService,
              private  httpCardsService: CardsService) {
  }

  ngOnInit() {
    this.getAllActionComponetn();
    this.getAndSetCardsData();
    this.drawChartsTest('Activity', 10, 10);
  }

  //  получаем данные по всем активностям с таблицами
  getAllActionComponetn() {
    this.httpAllActionService.getAllActionService()
      .pipe(
        tap(() => {

        }),
        finalize(() => {
          console.log(this.allActionList);

        })
      ).subscribe(response => {
      this.allActionList = response;
    });
  }

  //  получаем данные для четырех cards
  getAndSetCardsData() {
    this.httpCardsService.getCardsDataService()
      .pipe(tap(() => {

        }),
        finalize(() => {

        })
      ).subscribe(response => {
      this.cardsData = response;
    });
  }

  // рисовка таблицы
  drawChartsTest(nameOfGoal: string, valueOfGoal: number, valueAlreadyDone: number) {
    // получаем имя из БД
    // let valueThatLeftToComplete = valueOfGoal - valueAlreadyDone;
    // получаем значение которое осталось
    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: nameOfGoal
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          {y: 10, name: 'DELETE'},
          {y: 50, name: 'CREATE'},
          {y: 90, name: 'UPDATE'},
        ]
      }]
    });

    chart.render();
  }

}
