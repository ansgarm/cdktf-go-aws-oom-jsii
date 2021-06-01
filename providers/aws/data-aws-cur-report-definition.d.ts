import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html#report_name DataAwsCurReportDefinition#report_name}.
     */
    readonly reportName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition}.
 */
export declare class DataAwsCurReportDefinition extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCurReportDefinitionConfig);
    get additionalArtifacts(): string[];
    get additionalSchemaElements(): string[];
    get compression(): string;
    get format(): string;
    get id(): string;
    get refreshClosedReports(): boolean;
    private _reportName;
    get reportName(): string;
    set reportName(value: string);
    get reportNameInput(): string;
    get reportVersioning(): string;
    get s3Bucket(): string;
    get s3Prefix(): string;
    get s3Region(): string;
    get timeUnit(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
