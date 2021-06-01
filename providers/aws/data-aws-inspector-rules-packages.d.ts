import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInspectorRulesPackagesConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages}.
 */
export declare class DataAwsInspectorRulesPackages extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsInspectorRulesPackagesConfig);
    get arns(): string[];
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
