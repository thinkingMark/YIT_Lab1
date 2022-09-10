import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../services/post.service';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SummaryComponent
      ],
      providers: [PostService]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture: ComponentFixture<SummaryComponent> = TestBed.createComponent(SummaryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a post defined'`, () => {
    const fixture: ComponentFixture<SummaryComponent> = TestBed.createComponent(SummaryComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.summaryPost).toBeDefined();
    });
  });

  it(`should have as post truthy'`, () => {
    const fixture: ComponentFixture<SummaryComponent> = TestBed.createComponent(SummaryComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.summaryPost).toBeTruthy();
    });
  });

  it(`shortDescription should not to be null'`, () => {
    const fixture: ComponentFixture<SummaryComponent> = TestBed.createComponent(SummaryComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.summaryPost.shortDescription).not.toBe('');
    });
  });
});
